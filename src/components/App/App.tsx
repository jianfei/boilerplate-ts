import AppRouter from 'components/AppRouter'
import store from 'models'
import { hot } from 'react-hot-loader'
import appProps from 'utils/appProps'
import 'utils/appTitle'

const { Provider, observer } = MobxReact

@observer
class App extends React.Component<object> {
    public render(): JSX.Element {
        return (
            <div {...appProps()}>
                <Provider {...store}>
                    <AppRouter />
                </Provider>
            </div>
        )
    }
}

export default hot(module)(App)
