// declare global {
//     interface Window {
//         i18nStats: {
//             [propName: string]: number;
//         }
//     }

//     const log: (key: string, content: string) => void
// }

declare const IS_DEV: boolean
declare const i18n: (key: string, ...args: string[]) => string
