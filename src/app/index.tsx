import './index.less'

import App from 'components/App'
import config from 'config'
import * as React from 'react'
import * as ReactDOM from 'react-dom'

loadExtensions()

ReactDOM.render(
    <App />,
    document.getElementById('root'),
)

function loadExtensions(): void {
    if (config.extension) {
        config.extension.forEach((extension: string) => {
            require(`extension/${extension}`)
        })
    }
}
