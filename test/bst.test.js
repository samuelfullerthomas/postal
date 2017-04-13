/* global describe it expect */
const data = require('./data-mock.json')
const contains = require('../bst/bst-contains.js')
describe('The bst', () => {
  it('should contain ranges it contains', () => {
    const doesContain = contains(28430000, data)
    expect(doesContain).toEqual({'days': 8, 'value': [28430000, 28430000]})
  })
  it('should not contain ranges it doesn\'t contain', () => {
    const doesContain = contains(28429000, data)
    expect(doesContain).toBe(false)
  })
  it('should hit on something that falls within a range', () => {
    const doesContain = contains(27960999, data)
    expect(doesContain).toEqual({'days': 11, 'value': [27900001, 27979999]})
  })
})
