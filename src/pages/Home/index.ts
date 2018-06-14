import PageLoading from 'pages/Loading'
import Loadable from 'react-loadable'

export default Loadable({
    loader: () => import(/* webpackChunkName: "pages/home" */ './Home'),
    loading: PageLoading,
})
