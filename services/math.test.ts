import { add } from './math'

describe('add', () => {
  it('should add 2 numbers', () => {
    expect(add(1, 1)).toBe(2)
  })
})
