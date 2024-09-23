import { defineStore } from 'pinia'

export interface Project {
  image: string
  title: string
  description: string
  technologies: { name: string; classes?: string }[]
  github_url?: string
  url?: string
}

export const projectsData: Project[] = [
  {
    image: '/images/projects/zerok.png',
    title: 'ZeroK',
    description:
      'Автоматизированный программно-аппаратный комплекс для робототехнических соревнований в дисциплине арканоид.',
    technologies: [
      {
        name: 'Java',
        classes: 'from-orange-500 to-red-500 bg-gradient-to-r',
      },
      {
        name: 'OpenCV',
        classes: 'from-green-500 to-blue-500 bg-gradient-to-r',
      },
      {
        name: 'C',
        classes: 'from-blue-800 to-blue-500 bg-gradient-to-r',
      },
      {
        name: 'Esp32',
        classes: 'from-zinc-800 to-zinc-500 bg-gradient-to-r',
      },
    ],
    github_url: 'https://github.com/vladDotH/Zero_K',
  },
  {
    image: '/images/projects/liner.jpg',
    title: 'CvLiner',
    description:
      'Робот для езды по размеченной дороге на основе RaspberryPi и системы компьютерного зрения.',
    technologies: [
      {
        name: 'Python',
        classes: 'from-yellow-500 to-blue-500 bg-gradient-to-r',
      },
      {
        name: 'OpenCV',
        classes: 'from-green-500 to-blue-500 bg-gradient-to-r',
      },
      {
        name: 'RaspberryPi',
        classes: 'from-pink-400 to-fuchsia-400 bg-gradient-to-r',
      },
    ],
  },
  {
    image: '/images/projects/py-ev3.png',
    title: 'PyEV3',
    description:
      'Библиотека для управления контроллером Lego EV3 по Bluetooth на языке python.',
    technologies: [
      {
        name: 'Python',
        classes: 'from-yellow-500 to-blue-500 bg-gradient-to-r',
      },
    ],
    github_url: 'https://github.com/vladDotH/pyEV3',
  },
  {
    image: '/images/projects/tetris.png',
    title: 'Тетрис',
    description:
      'Веб-приложение для игры в тетрис, созданное в качестве одной из лабораторных работ.',
    technologies: [
      {
        name: 'Typescript',
        classes: 'from-blue-500 to-blue-600 bg-gradient-to-r',
      },
      {
        name: 'Vue',
        classes: 'from-green-500 to-green-600 bg-gradient-to-r',
      },
    ],
    github_url: 'https://github.com/vladDotH/WebLabs/tree/lab1',
    url: 'https://vladdoth.xyz/tetris/#/game',
  },
  {
    image: '/images/projects/game.png',
    title: 'Ещё одна игра',
    description:
      'Минималистичная игра на чистом JavaScript и Canvas API с поддержкой карт из Tiled.',
    technologies: [
      {
        name: 'Javascript',
        classes: 'from-yellow-400 to-yellow-500 bg-gradient-to-r',
      },
    ],
    url: 'https://vladdoth.xyz/game/',
    github_url: 'https://github.com/vladDotH/WebCW',
  },

  {
    image: '/images/projects/attendance.png',
    title: 'ИС Посещаемость',
    description:
      'Информационная система посещаемости университета СПбГЭТУ "ЛЭТИ"',
    technologies: [
      {
        name: 'Typescript',
        classes: 'from-blue-500 to-blue-600 bg-gradient-to-r',
      },
      {
        name: 'Vue',
        classes: 'from-green-500 to-green-600 bg-gradient-to-r',
      },
      {
        name: 'NestJS',
        classes: 'from-red-600 to-red-700 bg-gradient-to-r',
      },
      {
        name: 'PostgreSQL',
        classes: 'from-blue-400 to-blue-700 bg-gradient-to-r',
      },
      {
        name: 'Redis',
        classes: 'from-red-600 to-red-400 bg-gradient-to-r',
      },
    ],
    url: 'https://digital.etu.ru/attendance/auth',
  },

  {
    image: '/images/projects/wex-web.png',
    title: 'Wex-Web',
    description:
      'Группа совместных проектов коммерческих веб-приложений и сайтов.',
    technologies: [
      {
        name: 'Typescript',
        classes: 'from-blue-500 to-blue-600 bg-gradient-to-r',
      },
      {
        name: 'Vue',
        classes: 'from-green-500 to-green-600 bg-gradient-to-r',
      },
      {
        name: 'Nuxt',
        classes: 'from-green-800 to-green-400 bg-gradient-to-r',
      },
    ],
    url: 'https://wex-web.ru/',
  },

  {
    image: '/images/projects/store.png',
    title: 'Store',
    description: 'Интернет-магазин антиквариата.',
    technologies: [
      {
        name: 'Typescript',
        classes: 'from-blue-500 to-blue-600 bg-gradient-to-r',
      },
      {
        name: 'Vue',
        classes: 'from-green-500 to-green-600 bg-gradient-to-r',
      },
      {
        name: 'NestJS',
        classes: 'from-red-600 to-red-700 bg-gradient-to-r',
      },
      {
        name: 'MySQL',
        classes: 'from-yellow-800 to-orange-400 bg-gradient-to-r',
      },
    ],
    url: 'http://store.wex-web.ru/catalog',
  },

  {
    image: '/images/projects/ecology.png',
    title: 'Ecology',
    description:
      'Система анализа спутниковых снимков и работы с ними, имеет веб-интерфейс и android-приложение.',
    technologies: [
      {
        name: 'Python',
        classes: 'from-yellow-500 to-blue-500 bg-gradient-to-r',
      },
      {
        name: 'Celery',
        classes: 'from-green-500 to-yellow-600 bg-gradient-to-r',
      },
      {
        name: 'OpenCV',
        classes: 'from-green-500 to-blue-500 bg-gradient-to-r',
      },
      {
        name: 'Redis',
        classes: 'from-red-600 to-red-400 bg-gradient-to-r',
      },
      {
        name: 'Typescript',
        classes: 'from-blue-500 to-blue-600 bg-gradient-to-r',
      },
      {
        name: 'Vue',
        classes: 'from-green-500 to-green-600 bg-gradient-to-r',
      },
      {
        name: 'Kotlin',
        classes: 'from-violet-500 to-orange-600 bg-gradient-to-r',
      },
    ],
    github_url: 'https://github.com/moevm/nosql2h23-ecology',
    url: 'https://vladdoth.xyz/ecology/',
  },

  {
    image: '/images/projects/mail2tg.png',
    title: 'Mail2Tg',
    description:
      'Телеграм-бот для пересылки email-сообщений в телеграм-чаты по настраиваемым правилам.',
    technologies: [
      {
        name: 'Go',
        classes: 'from-cyan-400 to-cyan-300 bg-gradient-to-r',
      },
      {
        name: 'IMAP',
        classes: 'from-red-500 to-yellow-500 bg-gradient-to-r',
      },
      {
        name: 'TelegramAPI',
        classes: 'from-sky-600 to-sky-300 bg-gradient-to-r',
      },
    ],
    github_url: 'https://github.com/vladDotH/mail2tg',
    url: 'https://github.com/vladDotH/mail2tg',
  },
].reverse()

export const useProjectsStore = defineStore('projects', () => {
  const projects = projectsData

  return { projects }
})
