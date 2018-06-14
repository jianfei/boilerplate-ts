import config from 'config'
import get from 'lodash-es/get'

const { observable, action } = Mobx

const query = window.location.search.slice(1) || window.location.hash.split('?')[1]
const localeFromQuery = get(qs.parse(query), 'locale')
const localeFromLocalStorage = localStorage.getItem('locale')

export default class Runtime implements IRuntime.Class {
    @observable public locale = localeFromQuery || localeFromLocalStorage || config.locale
    @observable public i18nTemplates: IRuntime.Templates = {}

    @action public setLocale(locale: string) {
        this.locale = locale
    }

    @action public setI18nTemplates(templates: IRuntime.Templates) {
        this.i18nTemplates = templates
    }
}
