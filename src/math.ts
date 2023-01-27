/**
 *
 * @param value
 * @param num
 * @returns
 *
 * @example round(1.23456, 2)
 * //=> 1.23
 * @example round(1.23456, 4)
 * //=> 1.2346
 */
export const round = (value: number, num: number) => Math.round(value * Math.pow(10, num)) / Math.pow(10, num)

/**
 *
 * @param value
 * @param num
 * @returns
 *
 * @example roundUp(1.23456, 2)
 * //=> 1.24
 */
export const roundUp = (value: number, num: number) => Math.ceil(value * Math.pow(10, num)) / Math.pow(10, num)

/**
 *
 * @param value
 * @param num
 * @returns
 *
 * @example roundDown(1.23456, 4)
 * //=> 1.2345
 */
export const roundDown = (value: number, num: number) => Math.floor(value * Math.pow(10, num)) / Math.pow(10, num)
