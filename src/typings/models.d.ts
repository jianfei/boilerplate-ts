declare namespace IRuntime {
    interface Templates {
        [propName: string]: string,
    }

    interface Class {
        locale: string
        i18nTemplates: Templates,
        setLocale: (locale: string) => void
        setI18nTemplates: (templates: Templates) => void
    }
}
