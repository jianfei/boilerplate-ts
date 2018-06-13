import _get from 'lodash-es/get'
import _mapValues from 'lodash-es/mapValues'
import store from 'models'

const { reaction } = Mobx
const { runtime } = store

updateTemplates()
reaction(() => runtime.locale, updateTemplates)

function updateTemplates(): void {
    import(/* webpackChunkName: "i18n/[request]" */ `i18n/${runtime.locale}`)
        .then(({ default: templates }) => {
            log('app:i18n', `加载语言包(${runtime.locale})成功`)

            if (IS_DEV) {
                window.i18nStats = _mapValues(templates, () => 0)
            }

            runtime.setI18nTemplates(templates)
        })
}

function i18n(key: string, ...args: string[]): string {
    const { i18nTemplates } = runtime

    if (_get(i18nTemplates, key)) {
        if (IS_DEV && window.i18nStats) {
            window.i18nStats[key] += 1
        }

        return template(i18nTemplates[key], ...args)
    }

    return ''
}

export default i18n
