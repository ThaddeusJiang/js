import { match, P } from 'ts-pattern'

/**
 * parse Data URL that can be used in <img src="...">
 * @param value data from Prisma Client
 * @returns Data URL, like: `data:[<MIME type>][;base64],<data>`
 *
 * https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/Data_URLs
 */
export function parseDataURL(value: Buffer | null) {
  if (!value) return null

  const mime = getMimeType(value)

  return mime ? `data:${mime};base64,${value.toString('base64')}` : null
}

export function getMimeType(value: Buffer | null) {
  if (!value) return null

  const values = value.values()

  return match(values)
    .with([0xff, 0xd8, 0xff, ...P.array()], () => 'image/jpeg')
    .with([0x89, 0x50, 0x4e, 0x47, ...P.array()], () => 'image/png')
    .with([0x47, 0x49, 0x46, ...P.array()], () => 'image/gif')
    .otherwise(() => null)
}
