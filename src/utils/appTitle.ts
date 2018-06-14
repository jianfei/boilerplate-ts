import createBrowserHistory, { BrowserHistoryBuildOptions } from 'history/createBrowserHistory'
import createHashHistory, { HashHistoryBuildOptions } from 'history/createHashHistory'
import store from 'models'

const DEFAULT_TITLE = 'app.title'
const TITLE_MAP: IUtils.TitleMap = {}

const { runtime } = store
const { reaction } = Mobx
const createHistory: any = IS_DEV ? createHashHistory : createBrowserHistory
const history = createHistory()

reaction(() => runtime.i18nTemplates, () => updateTitle())
history.listen((location: string) => updateTitle(location))

function updateTitle(location = history.location) {
    const key = TITLE_MAP[location.pathname] || DEFAULT_TITLE
    const title = key ? i18n(key) : ''

    if (title) {
        document.title = title
    }
}
