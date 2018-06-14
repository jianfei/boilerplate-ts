import debug from 'debug'

export default (key: string, content: string) => {
    if (typeof content === 'undefined') {
        content = key
        key = 'app'
    }

    debug(key)(content)
}
