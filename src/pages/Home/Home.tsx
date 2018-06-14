import './Home.less'

import i18n from 'i18n'
import { inject, observer } from 'mobx-react'
import * as React from 'react'

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
