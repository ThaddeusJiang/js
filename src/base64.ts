/**
 *
 * @param str
 * @returns
 *
 * @example encodeBase64("你好 世界")
 * // => "5L2g5aW9IOS4lueVjA=="
 */
export function encodeBase64(str: string): string {
  return Buffer.from(str).toString('base64')
}

/**
 *
 * @param str
 * @returns
 *
 * @example decodeBase64("5L2g5aW9IOS4lueVjA==")
 * // => "你好 世界"
 */
export function decodeBase64(str: string): string {
  return Buffer.from(str, 'base64').toString()
}
