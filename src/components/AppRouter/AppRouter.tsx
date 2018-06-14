import PageHome from 'pages/Home'
import * as React from 'react'
import { BrowserRouter, HashRouter, Route } from 'react-router-dom'

const Router = IS_DEV ? HashRouter : BrowserRouter

export default class AppRouter extends React.Component<object> {
    public render(): JSX.Element {
        return (
            <React.Fragment>
                <Router>
                    <React.Fragment>
                        <Route exact path="/" component={PageHome} />
                    </React.Fragment>
                </Router>
            </React.Fragment>
        )
    }
}
