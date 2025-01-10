import defineI18nConfig from '@nuxtjs/i18n'

export default defineI18nConfig((_nuxt: any) => ({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en: () => import('./locales/en.json'),
    vi: () => import('./locales/vi.json'),
  },
}))
