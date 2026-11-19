# EduPro — лендинг онлайн-платформы для обучения

React + Vite. Портфолио-проект по референсу EduPro.

## Запуск
```bash
npm install
npm run dev      # разработка
npm run build    # сборка в папку dist
```

## GitHub
```bash
git init && git add . && git commit -m "EduPro: первая версия"
git branch -M main
git remote add origin https://github.com/<ваш-логин>/edupro.git
git push -u origin main
```

## Деплой на Cloudflare
В панели Cloudflare: Workers & Pages → Create → Pages → Connect to Git → выберите репозиторий.
Настройки сборки (названия пунктов в панели могут немного отличаться):

- Framework preset: Vite (или None)
- Build command: `npm run build`
- Build output directory: `dist`
- Версия Node: 20 (уже указана в `.nvmrc`)

После каждого `git push` в `main` сайт пересобирается автоматически.

## Структура (shadcn + Tailwind 4 + TypeScript)
- `src/components/ui/` — компоненты в стиле shadcn (здесь лежит `sign-up.tsx`, страница регистрации)
- `@/` — алиас на `src` (настроен в `vite.config.js` и `tsconfig.json`)
- `src/index.css` — подключает Tailwind; старые стили из `styles.css` лежат в слое `components`
- Страница регистрации открывается по адресу `/#/signup` (маршрутизация через hash, дополнительная настройка Cloudflare не нужна)
- Страница курса с тестами: `/#/course/python`, `/#/course/english`, `/#/course/japanese` (вопросы лежат в `src/quizData.js`)
