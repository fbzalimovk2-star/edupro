import { useMemo, useState } from 'react'
import { ArrowLeft, Check, X } from 'lucide-react'
import { courses } from '../data'
import { levels, quiz, vocab } from '../quizData'

type Item = { ask?: string; prompt: string; correct: string; options: string[] }
type Rows = Record<string, Record<string, string[][]>>

const shuffle = <T,>(a: T[]): T[] => {
  const r = [...a]
  for (let i = r.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[r[i], r[j]] = [r[j], r[i]]
  }
  return r
}

const buildQuiz = (id: string, level: string): Item[] =>
  ((quiz as Rows)[id]?.[level] ?? []).map(([prompt, correct, ...wrong]) => ({
    prompt,
    correct,
    options: shuffle([correct, ...wrong]),
  }))

const buildVocab = (id: string, level: string): Item[] => {
  const all = (vocab as Rows)[id] ?? {}
  const pool = Object.values(all).flat().map((p) => p[1])
  return shuffle(all[level] ?? []).map(([prompt, correct]) => ({
    ask: 'Выберите перевод слова',
    prompt,
    correct,
    options: shuffle([correct, ...shuffle(pool.filter((x) => x !== correct)).slice(0, 3)]),
  }))
}

const btn = 'rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary/90'

function Test({ items, onRestart }: { items: Item[]; onRestart: () => void }) {
  const [i, setI] = useState(0)
  const [picked, setPicked] = useState<string | null>(null)
  const [score, setScore] = useState(0)

  if (i >= items.length) {
    const msg = score === items.length ? 'Отлично, все ответы верные!' : score >= items.length / 2 ? 'Хороший результат. Пройдите ещё раз, чтобы закрепить.' : 'Не страшно: повторите материал и попробуйте снова.'
    return (
      <div className="rounded-3xl bg-card p-8 text-center shadow-sm">
        <p className="text-sm text-muted-foreground">Ваш результат</p>
        <p className="my-2 text-5xl font-semibold">{score} / {items.length}</p>
        <p className="mb-6 text-muted-foreground">{msg}</p>
        <button onClick={onRestart} className={btn}>Пройти заново</button>
      </div>
    )
  }

  const item = items[i]
  const answer = (opt: string) => {
    if (picked) return
    setPicked(opt)
    if (opt === item.correct) setScore(score + 1)
  }

  return (
    <div className="rounded-3xl bg-card p-6 shadow-sm md:p-8">
      <p className="mb-3 text-sm text-muted-foreground">Вопрос {i + 1} из {items.length}</p>
      <div className="mb-6 h-1.5 rounded-full bg-secondary" aria-hidden="true">
        <div className="h-full rounded-full bg-primary transition-all" style={{ width: `${(i / items.length) * 100}%` }} />
      </div>
      {item.ask && <p className="text-sm text-muted-foreground">{item.ask}</p>}
      <h2 className="mb-6 text-2xl font-semibold">{item.prompt}</h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {item.options.map((opt) => {
          const right = picked !== null && opt === item.correct
          const wrong = picked === opt && opt !== item.correct
          const style = right ? 'border-green-600 bg-green-50 text-green-900' : wrong ? 'border-red-600 bg-red-50 text-red-900' : 'border-border bg-white hover:bg-secondary'
          return (
            <button key={opt} onClick={() => answer(opt)} disabled={picked !== null} className={`flex items-center justify-between gap-3 rounded-2xl border p-4 text-left transition-colors ${style} ${picked && !right && !wrong ? 'opacity-60' : ''}`}>
              <span>{opt}</span>
              {right && <Check size={18} aria-label="Верно" />}
              {wrong && <X size={18} aria-label="Неверно" />}
            </button>
          )
        })}
      </div>
      <div className="mt-6 flex min-h-12 items-center justify-between gap-4" aria-live="polite">
        {picked && (
          <>
            <p className="text-sm font-medium">{picked === item.correct ? 'Верно!' : `Правильный ответ: ${item.correct}`}</p>
            <button onClick={() => { setI(i + 1); setPicked(null) }} className={btn}>{i + 1 === items.length ? 'Результат' : 'Далее'}</button>
          </>
        )}
      </div>
    </div>
  )
}

const tabs = [{ id: 'quiz', label: 'Quiz' }, { id: 'vocab', label: 'Vocabulary' }]

export default function CoursePage({ id }: { id: string }) {
  const course = courses.find((c) => c.id === id)
  const [tab, setTab] = useState('quiz')
  const [level, setLevel] = useState('easy')
  const [attempt, setAttempt] = useState(0)
  const items = useMemo(() => (tab === 'quiz' ? buildQuiz(id, level) : buildVocab(id, level)), [id, tab, level, attempt])

  return (
    <div className="min-h-[100dvh] bg-background font-geist text-foreground">
      <div className="mx-auto max-w-3xl px-6 py-8">
        <a href="#/" className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <ArrowLeft className="h-4 w-4" /> На главную
        </a>
        {!course ? (
          <h1 className="mt-6 text-3xl font-semibold">Курс не найден</h1>
        ) : (
          <>
            <h1 className="mt-6 text-3xl font-semibold md:text-4xl">{course.title}</h1>
            <p className="mt-2 text-muted-foreground">Короткие тесты, чтобы проверить себя. Выберите тип теста и уровень сложности.</p>

            <div role="tablist" className="mt-8 inline-flex rounded-full bg-secondary p-1">
              {tabs.map((t) => (
                <button key={t.id} role="tab" aria-selected={tab === t.id} onClick={() => setTab(t.id)} className={`rounded-full px-5 py-2 text-sm font-semibold transition-colors ${tab === t.id ? 'bg-primary text-primary-foreground' : 'hover:bg-white/60'}`}>
                  {t.label}
                </button>
              ))}
            </div>

            <div role="radiogroup" aria-label="Уровень сложности" className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted-foreground">Сложность:</span>
              {levels.map((l) => (
                <button key={l.id} role="radio" aria-checked={level === l.id} onClick={() => setLevel(l.id)} className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-colors ${level === l.id ? 'border-primary bg-primary/10 text-primary' : 'border-border bg-white hover:bg-secondary'}`}>
                  {l.label}
                </button>
              ))}
            </div>

            <div className="mt-6">
              <Test key={`${tab}-${level}-${attempt}`} items={items} onRestart={() => setAttempt(attempt + 1)} />
            </div>
          </>
        )}
      </div>
    </div>
  )
}
