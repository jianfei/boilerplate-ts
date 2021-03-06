import get from 'lodash-es/get'
import mapValues from 'lodash-es/mapValues'
import { reaction } from 'mobx'
import store from 'models'
import template from 'string-template'
import log from 'utils/logger'

const { runtime } = store

updateTemplates()
reaction(() => runtime.locale, updateTemplates)

function updateTemplates(): void {
    import(/* webpackChunkName: "i18n/[request]" */ `i18n/${runtime.locale}`)
        .then(({ default: templates }) => {
            log('app:i18n', `加载语言包(${runtime.locale})成功`)

            if (IS_DEV) {
                (window as any).i18nStats = mapValues(templates, () => 0)
            }

            runtime.setI18nTemplates(templates)
        })
}

function i18n(key: string, ...args: any[]): string {
    const { i18nTemplates } = runtime

    if (get(i18nTemplates, key)) {
        if (IS_DEV && (window as any).i18nStats) {
            (window as any).i18nStats[key] += 1
        }

        return template(i18nTemplates[key], ...args)
    }

    return ''
}

export default i18n
