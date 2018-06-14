import axios from 'axios'
import config from 'config'

const baseURL = IS_DEV ? config.mockServer : config.liveServer
const service = axios.create({ baseURL })

service.interceptors.response.use(
    response => response.data,
)

export const requestDemo = () => service.get('/demo.json')
