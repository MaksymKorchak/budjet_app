
import { getFromStorage } from "../../utils/sessionStorage";
import { THEMES } from "../themes/themeList";
import { LOCALES } from "../i18n";

export default {
    currency: 'USD',
    themeName: getFromStorage('themeName') || THEMES.BASIC,
    locale: getFromStorage('locale') || LOCALES.ENGLISH
}