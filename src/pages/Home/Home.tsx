import './Home.less'

import i18n from 'i18n'

const { inject, observer } = MobxReact

@inject('runtime')
@observer
export default class Home extends React.Component<object> {
    public static defaultProps: object = {
    }

    public state: object = {
    }

    public render(): JSX.Element {
        return (
            <div className="page-home">
                {i18n('app.title')}
            </div>
        )
    }
}
