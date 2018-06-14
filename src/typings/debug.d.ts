declare module 'debug' {
    const createDebug: {
        (namespace: string): (formatter: any, ...args: any[]) => void
    }

    export default createDebug
}
