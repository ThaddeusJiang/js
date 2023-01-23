import { round, roundDown, roundUp } from '../src/math'

it('math round', () => {
  expect(round(1.23456, 2)).toEqual(1.23)
  expect(round(1.23456, 4)).toEqual(1.2346)
})

it('math roundUp', () => {
  expect(roundUp(1.23456, 2)).toEqual(1.24)
})

it('math roundDown', () => {
  expect(roundDown(1.23456, 4)).toEqual(1.2345)
})
