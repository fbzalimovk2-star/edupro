import { Laptop, PlayCircle, Award, Headphones, Terminal, Languages, Sunrise } from 'lucide-react'

export const nav = [
  { label: 'О платформе', href: '#features' },
  { label: 'Тарифы', href: '#' },
  { label: 'Блог', href: '#' },
  { label: 'FAQ', href: '#' },
]

export const features = [
  { icon: Laptop, title: 'Доступ', text: 'с любого устройства' },
  { icon: PlayCircle, title: 'Видеоуроки', text: 'и практические задания' },
  { icon: Award, title: 'Сертификат', text: 'по окончании' },
  { icon: Headphones, title: 'Поддержка', text: 'преподавателей' },
]

export const courses = [
  { id: 'python', title: 'Основы программирования на Python', icon: Terminal, tone: 't-py', badge: 'Хит', hours: '40 часов', rating: 4.8, reviews: '12k' },
  { id: 'english', title: 'Английский язык с нуля до B1', icon: Languages, tone: 't-mk', badge: 'Новинка', badgeTone: 'new', hours: '32 часа', rating: 4.7, reviews: '8k' },
  { id: 'japanese', title: 'Японский язык для начинающих', icon: Sunrise, tone: 't-ux', hours: '28 часов', rating: 4.9, reviews: '6k' },
]

export const reviews = [
  { avatarSrc: 'https://cdn.21st.dev/assets/mirror/9f/9f797e4acee1a4de4f9b4c3aa1cc4e89d7c9efd5dbff1c463d88374ed601d719.jpg', name: 'Анна Смирнова', handle: '@anna_learns', text: 'Прошла курс по Python за два месяца. Удобный график и быстрые ответы преподавателей.' },
  { avatarSrc: 'https://cdn.21st.dev/assets/mirror/8d/8d9a61a581c43fe2088f221b7692c95db4b3ad5c0da0c856400c0e5acdcdcea8.jpg', name: 'Марат Ким', handle: '@marat_english', text: 'За три месяца подтянул английский до B1 и начал читать документацию без переводчика.' },
  { avatarSrc: 'https://cdn.21st.dev/assets/mirror/a6/a634d4f02fe5b77804943c1d74b8d70e35ffe26454e0e9af9717432a2c72bfde.jpg', name: 'Данил Орлов', handle: '@danil_nihongo', text: 'Японский с нуля: видеоуроки и практика с преподавателем помогли выучить хирагану за месяц.' },
]
