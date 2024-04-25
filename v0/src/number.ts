export const jaFormat = (value: number) => {
  return new Intl.NumberFormat('ja-JP').format(value)
}

/**
 *
 * @param value
 * @param isCurrency
 * @returns
 *
 * the Japanese yen doesn't use a minor unit
 *
 * example:
 * - yenFormat(1000.01) // => '￥1,000'
 * - yenFormat(1000.95) // => '￥1,001'
 */
export const yenFormat = (value: number) => {
  return new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(value)
}
