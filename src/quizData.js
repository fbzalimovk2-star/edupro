export const levels = [
  { id: 'easy', label: 'Лёгкий' },
  { id: 'medium', label: 'Средний' },
  { id: 'hard', label: 'Сложный' },
]

export const quiz = {
  python: {
    easy: [
      ['Какая функция выводит текст на экран?', 'print()', 'echo()', 'show()', 'write()'],
      ['Как написать комментарий в Python?', '# комментарий', '// комментарий', '/* комментарий */', '-- комментарий'],
      ['Какой тип у значения 3.14?', 'float', 'int', 'str', 'bool'],
    ],
    medium: [
      ['Что вернёт len([1, 2, 3])?', '3', '2', '4', 'Ошибку'],
      ['Как перебрать элементы списка items?', 'for x in items:', 'foreach x in items:', 'loop items:', 'each x of items:'],
      ['Как получить последний элемент списка a?', 'a[-1]', 'a[last]', 'a[len(a)]', 'a.end()'],
    ],
    hard: [
      ['Что выведет print(type([]))?', "<class 'list'>", "<class 'array'>", 'list', '[]'],
      ['Что создаёт выражение [x * 2 for x in range(3)]?', 'Список [0, 2, 4]', 'Список [2, 4, 6]', 'Кортеж (0, 2, 4)', 'Ошибку'],
      ['Что вернёт функция без оператора return?', 'None', '0', 'Пустую строку', 'Ошибку'],
    ],
  },
  english: {
    easy: [
      ['I ___ a student.', 'am', 'is', 'are', 'be'],
      ['She ___ coffee every day.', 'drinks', 'drink', 'drinking', 'drank'],
      ['Как по-английски «спасибо»?', 'Thank you', 'Please', 'Sorry', 'Hello'],
    ],
    medium: [
      ['I have lived here ___ 2020.', 'since', 'for', 'from', 'during'],
      ['If it rains, we ___ at home.', 'will stay', 'would stay', 'stayed', 'staying'],
      ['He is good ___ football.', 'at', 'in', 'on', 'with'],
    ],
    hard: [
      ['By next year, she ___ here for ten years.', 'will have worked', 'will work', 'has worked', 'is working'],
      ['Hardly ___ the house when it started to rain.', 'had he left', 'he had left', 'did he left', 'he left'],
      ['The report must be finished ___ Friday.', 'by', 'until', 'since', 'at'],
    ],
  },
  japanese: {
    easy: [
      ['Что значит «ありがとう»?', 'Спасибо', 'Здравствуйте', 'До свидания', 'Извините'],
      ['Какой знак читается как «ka»?', 'か', 'き', 'く', 'け'],
      ['Как по-японски «да»?', 'はい', 'いいえ', 'すみません', 'おはよう'],
    ],
    medium: [
      ['Какая частица обозначает тему предложения?', 'は (wa)', 'を (o)', 'に (ni)', 'で (de)'],
      ['Что означает «私は学生です»?', 'Я студент', 'Я иду в школу', 'Это учитель', 'Он студент'],
      ['Как читается «先生»?', 'sensei', 'sakura', 'gakkō', 'tomodachi'],
    ],
    hard: [
      ['Какая частица отмечает прямое дополнение?', 'を (o)', 'が (ga)', 'の (no)', 'と (to)'],
      ['Вежливая форма глагола «есть» в настоящем времени:', 'たべます', 'たべる', 'たべた', 'たべない'],
      ['Что означает «本を読みたいです»?', 'Я хочу читать книгу', 'Я прочитал книгу', 'Я не читаю книги', 'Читайте книгу'],
    ],
  },
}

export const vocab = {
  python: {
    easy: [['variable', 'переменная'], ['string', 'строка'], ['list', 'список'], ['loop', 'цикл'], ['function', 'функция']],
    medium: [['dictionary', 'словарь'], ['tuple', 'кортеж'], ['condition', 'условие'], ['argument', 'аргумент'], ['module', 'модуль']],
    hard: [['decorator', 'декоратор'], ['generator', 'генератор'], ['exception', 'исключение'], ['inheritance', 'наследование'], ['iterator', 'итератор']],
  },
  english: {
    easy: [['apple', 'яблоко'], ['house', 'дом'], ['water', 'вода'], ['friend', 'друг'], ['book', 'книга']],
    medium: [['improve', 'улучшать'], ['journey', 'путешествие'], ['borrow', 'одалживать (брать)'], ['achieve', 'достигать'], ['expensive', 'дорогой']],
    hard: [['reluctant', 'неохотный'], ['inevitable', 'неизбежный'], ['ambiguous', 'двусмысленный'], ['thorough', 'тщательный'], ['endeavor', 'старание']],
  },
  japanese: {
    easy: [['こんにちは (konnichiwa)', 'здравствуйте'], ['ありがとう (arigatō)', 'спасибо'], ['みず (mizu)', 'вода'], ['ねこ (neko)', 'кошка'], ['いぬ (inu)', 'собака']],
    medium: [['学校 (gakkō)', 'школа'], ['先生 (sensei)', 'учитель'], ['友達 (tomodachi)', 'друг'], ['食べる (taberu)', 'есть, кушать'], ['本 (hon)', 'книга']],
    hard: [['勉強 (benkyō)', 'учёба'], ['図書館 (toshokan)', 'библиотека'], ['仕事 (shigoto)', 'работа'], ['旅行 (ryokō)', 'путешествие'], ['天気 (tenki)', 'погода']],
  },
}
