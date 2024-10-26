export type News = {
  setNews: boolean
  text: string
  icon: string
}

export type MenuItem = {
  title: string
  url: string
}

export type AppSettings = {
  title: string
  description: string
  news: News
  menu: MenuItem[]
}

// Default settings for the application
export const APP_SETTINGS: AppSettings = {
  title: 'DocsMaker',
  description: 'My documentation site',
  news: {
    setNews: true,
    text: "Welcome to the new site! We're still working on some things, but feel free to poke around.",
    icon: '🚀'
  },
  menu: [
    { title: 'Home', url: '/' },
    { title: 'About', url: '/about' },
    { title: 'Contact', url: '/contact' }
  ]
}
