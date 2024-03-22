import { decodeBase64, encodeBase64 } from './base64'

test('decodes base64 string', () => {
  const encodedString = '5q2j5byPIHNtYWxsLmpwZw=='
  const decodedString = '正式 small.jpg'

  expect(decodeBase64(encodedString)).toBe(decodedString)
  expect(encodeBase64(decodedString)).toBe(encodedString)
})
