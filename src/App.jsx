import { useEffect, useState } from 'react'
import { GraduationCap, Search, ChevronDown, ArrowRight, Play, Lightbulb, BookOpen, ListChecks, Menu, X, Clock, Star } from 'lucide-react'
import { nav, features, courses, reviews } from './data'
import { SignUpPage } from './components/ui/sign-up'
import CoursePage from './components/CoursePage'

function Header({ q, setQ }) {
  const [open, setOpen] = useState(false)
  const submit = (e) => {
    e.preventDefault()
    document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <header className="wrap header">
      <a className="logo" href="#top"><GraduationCap size={36} />EduPro</a>
      <nav className={open ? 'nav open' : 'nav'} aria-label="Основное меню">
        <button className="link" onClick={() => document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' })}>
          Каталог курсов <ChevronDown size={16} />
        </button>
        {nav.map((n) => <a key={n.label} href={n.href} onClick={() => setOpen(false)}>{n.label}</a>)}
      </nav>
      <form className="search" onSubmit={submit} role="search">
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Поиск курсов..." aria-label="Поиск курсов" />
        <button aria-label="Найти"><Search size={18} /></button>
      </form>
      <div className="actions">
        <a className="link" href="#">Войти</a>
        <a className="btn btn-primary" href="#/signup">Регистрация</a>
        <button className="burger" aria-label="Меню" onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="wrap hero" id="top">
      <div>
        <span className="pill">Онлайн-платформа для обучения</span>
        <h1>Учитесь сегодня —<br /><span className="accent">достигайте большего завтра</span></h1>
        <p className="lead">Курсы от экспертов, гибкий график и поддержка на каждом этапе обучения.</p>
        <div className="cta-row">
          <a className="btn btn-primary btn-lg" href="#courses">Выбрать курс <ArrowRight size={18} /></a>
          <a className="more" href="#features"><span className="play"><Play size={16} fill="currentColor" /></span>Узнать больше</a>
        </div>
      </div>
      <div className="art" aria-hidden="true">
        <div className="blob" />
        <div className="chip bulb"><Lightbulb size={60} /></div>
        <div className="chip book"><BookOpen size={72} /></div>
        <div className="chip vid"><Play size={30} fill="currentColor" /></div>
        <div className="chip list"><ListChecks size={44} /></div>
        <div className="laptop"><div className="screen"><GraduationCap size={64} /></div><div className="base" /></div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section className="wrap" id="features">
      <ul className="features">
        {features.map(({ icon: Icon, title, text }) => (
          <li key={title}>
            <span className="ico"><Icon size={26} /></span>
            <p>{title}<br />{text}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

function Courses({ q }) {
  const list = courses.filter((c) => c.title.toLowerCase().includes(q.trim().toLowerCase()))
  return (
    <section className="wrap courses" id="courses">
      <div>
        <div className="row">
          <h2>Популярные курсы</h2>
          <a className="small" href="#courses">Все курсы <ArrowRight size={14} /></a>
        </div>
        {list.length ? (
          <div className="grid">
            {list.map(({ icon: Icon, ...c }) => (
              <article className="card" key={c.title}>
                <div className={`thumb ${c.tone}`}>
                  <Icon size={52} />
                  {c.badge && <span className={`badge ${c.badgeTone || ''}`}>{c.badge}</span>}
                </div>
                <div className="body">
                  <h3>{c.title}</h3>
                  <p className="meta">
                    <Clock size={14} /> {c.hours}
                    <Star size={14} fill="currentColor" className="star" /> {c.rating} ({c.reviews})
                  </p>
                  <a className="btn btn-outline" href={`#/course/${c.id}`}>Начать обучение</a>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <p className="empty">По запросу «{q}» курсов нет. Попробуйте другое слово, например «Python».</p>
        )}
      </div>
      <aside className="join">
        <GraduationCap className="cap" size={56} />
        <h2>Ваш путь к новым знаниям начинается здесь</h2>
        <p>Присоединяйтесь к EduPro и откройте для себя мир онлайн-образования!</p>
        <a className="btn btn-primary" href="#/signup">Зарегистрироваться <ArrowRight size={18} /></a>
      </aside>
    </section>
  )
}

const getRoute = () => (window.location.hash.startsWith('#/') ? window.location.hash.slice(2) : '')

function useRoute() {
  const [route, setRoute] = useState(getRoute)
  useEffect(() => {
    const onHash = () => {
      setRoute(getRoute())
      if (window.location.hash.startsWith('#/')) window.scrollTo(0, 0)
    }
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])
  return route
}

function SignUp() {
  const [name, setName] = useState('')
  return (
    <div className="bg-background text-foreground">
      <SignUpPage
        description={name ? `Аккаунт для ${name} создан. Это демо: данные никуда не отправляются.` : undefined}
        heroImageSrc="https://cdn.21st.dev/assets/mirror/ec/ecff1664e7fc3185d0e947571f984ea5fa3de9580fb0e73a03cd9c9b3461cb09.jpg"
        testimonials={reviews}
        onSignUp={(e) => {
          e.preventDefault()
          setName(String(new FormData(e.currentTarget).get('name') || ''))
        }}
        onGoogleSignUp={() => alert('Вход через Google пока не подключён')}
        onSignIn={() => alert('Страница входа пока не создана')}
      />
    </div>
  )
}

export default function App() {
  const route = useRoute()
  const [q, setQ] = useState('')
  if (route === 'signup') return <SignUp />
  if (route.startsWith('course/')) return <CoursePage id={route.slice(7)} />
  return (
    <>
      <Header q={q} setQ={setQ} />
      <main>
        <Hero />
        <Features />
        <Courses q={q} />
      </main>
      <footer className="wrap foot">© 2026 EduPro. Учебный проект для портфолио.</footer>
    </>
  )
}
