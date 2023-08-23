import { createI18n } from "vue-i18n";
import en from './en.json';
import mm from './mm.json';

const i18n = createI18n({
    locale: localStorage.getItem('language') ?? 'en',
    fallbackLocale: 'en',
    messages: {
        en: en,
        mm: mm
    }
})

export default i18n;