import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)
const messagesModules = {
  br: {
    ...require('./translations/br.json')
  },
  en: {
    ...require('./translations/en.json')
  }
}
export default new VueI18n({
  locale: 'br',
  fallbackLocale: 'br',
  messages: messagesModules
})
