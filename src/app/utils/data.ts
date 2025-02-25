export const navigationLinks = [
  { label: 'Home', path: '#home' },
  { label: 'About Me', path: '#about' },
  { label: 'Projects', path: '#projects' },
  { label: 'Experience', path: '#skills' },
  { label: 'Contact', path: '#contact' }
]

export type projectType = {
  name: string
  repo: string
  url: string | false
  image: string
  description: string
  tags: string[]
}

export const projectsData: projectType[] = [
  {
    name: 'Website Wedding',
    repo: 'https://github.com/guilherme-dev14/casamento',
    url: 'https://casamentocesarelenise.vercel.app/',
    image: 'https://i.ibb.co/kgD26Cq/casamento.png',
    description:
      'This website was made for my parents wedding. It has a countdown, a form to send messages and a gallery with photos of the couple.',
    tags: ['html', 'typescript', 'styled-components', 'css']
  },
  {
    name: 'Old Portfolio',
    repo: 'https://github.com/guilherme-dev14/guilherme-dev14.github.io',
    url: 'https://guilherme-dev14.github.io',
    image: 'https://i.ibb.co/QjXxjPG/Captura-de-tela-2025-01-15-162539.png',
    description: 'Multi-page Website com tema espacial.',
    tags: ['react', 'javascript', 'html', 'css']
  },
  {
    name: 'Iza Blog',
    repo: 'https://github.com/guilherme-dev14/izasblog',
    url: '',
    image: 'https://i.ibb.co/vdSBFYx/site-iza-1.png"',
    description:
      'Blog with interactive comments section, made with Vue and TypeScript.',
    tags: ['vue', 'typescript', 'styled-components']
  }
]

export const skillsData = [
  {
    img: 'vuejs/vuejs-original.svg',
    name: 'Vue'
  },
  {
    img: 'dotnetcore/dotnetcore-original.svg',
    name: '.NET Core'
  },
  {
    img: 'azure/azure-original.svg',
    name: 'Azure DevOps'
  },
  {
    img: 'typescript/typescript-original.svg',
    name: 'TypeScript'
  },
  {
    img: 'git/git-original.svg',
    name: 'Git'
  },
  {
    img: 'javascript/javascript-original.svg',
    name: 'JavaScript'
  },
  {
    img: 'sass/sass-original.svg',
    name: 'Sass'
  },

  {
    img: 'react/react-original.svg',
    name: 'React'
  }
]
