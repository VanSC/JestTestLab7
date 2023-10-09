const {average} = require('../utils/for_testing')

describe('average', () =>{
    test('of one value is the value itself', () =>{
        expect(average([1])).toBe(1)
    })
    test('of one value is the value itself', () => {
        expect(average([1,2,3,4,5,6])).toBe(3.5)
    })
    test('of one value is the value itself', () => {
        expect(average([2,2])).toBe(2)
    })
    test('of one value is the value itself', () => {
        expect(average([])).toBe(0)
    })
})