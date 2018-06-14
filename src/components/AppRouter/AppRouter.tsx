import PageHome from 'pages/Home'

const { Fragment } = React
const { BrowserRouter, HashRouter, Route } = ReactRouter
const Router = IS_DEV ? HashRouter : BrowserRouter

export default class AppRouter extends React.Component<object> {
    public render(): JSX.Element {
        return (
            <Fragment>
                <Router>
                    <Fragment>
                        <Route exact path="/" component={PageHome} />
                    </Fragment>
                </Router>
            </Fragment>
        )
    }
}
