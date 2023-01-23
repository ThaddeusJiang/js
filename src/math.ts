// TODO: 这里如何可以像 ExDoc 一样生成文档，并且自动测试，就好了
/**
 *
 * @param value
 * @param num
 * @returns
 *
 * examples:
 * ```js
 *  round(1.23456, 2) // 1.23
 *  round(1.23456, 4) // 1.2346
 * ```
 */
export const round = (value: number, num: number) => Math.round(value * Math.pow(10, num)) / Math.pow(10, num)

export const roundUp = (value: number, num: number) => Math.ceil(value * Math.pow(10, num)) / Math.pow(10, num)

export const roundDown = (value: number, num: number) => Math.floor(value * Math.pow(10, num)) / Math.pow(10, num)
