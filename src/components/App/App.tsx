import AppRouter from 'components/AppRouter'
import { observer, Provider } from 'mobx-react'
import store from 'models'
import * as React from 'react'
import { hot } from 'react-hot-loader'
import appProps from 'utils/appProps'
import 'utils/appTitle'

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
