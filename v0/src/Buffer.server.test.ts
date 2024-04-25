import { getMimeType } from './Buffer.server'

describe('getMimeType', () => {
  it('should return "image/jpeg" for JPEG images', () => {
    const buffer = Buffer.from([0xff, 0xd8, 0xff, 0xe0, 0x00, 0x10, 0x4a, 0x46, 0x49, 0x46])
    expect(getMimeType(buffer)).toBe('image/jpeg')
  })

  it('should return "image/png" for PNG images', () => {
    const buffer = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a])
    expect(getMimeType(buffer)).toBe('image/png')
  })

  it('should return "image/gif" for GIF images', () => {
    const buffer = Buffer.from([0x47, 0x49, 0x46, 0x38, 0x39, 0x61])
    expect(getMimeType(buffer)).toBe('image/gif')
  })

  it('should return null for unknown file types', () => {
    const buffer = Buffer.from([0x00, 0x00, 0x00, 0x00])
    expect(getMimeType(buffer)).toBeNull()
  })

  it('should return null for null input', () => {
    expect(getMimeType(null)).toBeNull()
  })
})
