import * as _React from 'react'
import * as _ReactDOM from 'react-dom'
import * as _ReactRouter from 'react-router-dom'
import * as _Mobx from 'mobx'
import * as _MobxReact from 'mobx-react'

declare global {
    interface Window {
        i18nStats: {
            [propName: string]: number;
        }
    }

    const IS_DEV: boolean

    const React: typeof _React
    const ReactDOM: typeof _ReactDOM
    const ReactRouter: typeof _ReactRouter
    const Loadable: any
    const Mobx: typeof _Mobx
    const MobxReact: typeof _MobxReact
    // Rx: 'rxjs/Rx',
    // Transition: 'react-transition-group/Transition',
    // CSSTransition: 'react-transition-group/CSSTransition',
    // TransitionGroup: 'react-transition-group/TransitionGroup',

    // axios: 'axios',
    // classnames: 'classnames',
    const i18n: (key: string, ...args: string[]) => string
    const log: (key: string, content: string) => void
    // qs: 'qs',
    // switcher: 'switch-js',
    const template: (template: string, ...args: any[]) => string
}
