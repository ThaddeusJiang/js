import { jaFormat, yenFormat } from '../src'

describe('member', () => {
  it('jaFormat', () => {
    expect(jaFormat(1000.95)).toBe('1,000.95')
  })
  it('yenFormat', () => {
    expect(yenFormat(1000.01)).toBe('￥1,000')
    expect(yenFormat(1000.95)).toBe('￥1,001')
  })
})
