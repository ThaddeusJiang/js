import { isLeapYear } from './isLeapYear'

it('should return true for leap years', () => {
  expect(isLeapYear(2000)).toBe(true)
  expect(isLeapYear(2004)).toBe(true)
  expect(isLeapYear(2020)).toBe(true)
})

it('should return false for non-leap years', () => {
  expect(isLeapYear(1900)).toBe(false)
  expect(isLeapYear(2001)).toBe(false)
  expect(isLeapYear(2019)).toBe(false)
})
