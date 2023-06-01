const myFunc = require('../src/moveZerosToTheEnd')


it(
    "Should move the zeros to the end of the array when an empty array of integers is given",
    () => {
        let array = []
        expect(myFunc(array)).toEqual([])
    }
)

it(
    "Should move the zeros to the end of the array when the array of integers has no zeros",
    () => {

        let array = [1]
        expect(myFunc(array)).toEqual([1])

        array = [1, 2, 3]
        expect(myFunc(array)).toEqual([1, 2, 3])
    }
)

it(
    "Should move the zeros to the end of the array when the array of integers has one zero",
    () => {

        let array = [0]
        expect(myFunc(array)).toEqual([0])

        array = [1, 0, 2, 3]
        expect(myFunc(array)).toEqual([1, 2, 3, 0])

        array = [1, 2, 3, 0]
        expect(myFunc(array)).toEqual([1, 2, 3, 0])
    }
)

it(
    "Should move the zeros to the end of the array when the array of integers has many zeros",
    () => {
        let array = [0, 0, 0]
        expect(myFunc(array)).toEqual([0, 0, 0])

        array = [0, 1, 0, 2, 0]
        expect(myFunc(array)).toEqual([1, 2, 0, 0, 0])

        array = [1, 2, 3, 0, 0, 0]
        expect(myFunc(array)).toEqual([1, 2, 3, 0, 0, 0])

        array = [1, 2, 3, 0, 0, 0, 4]
        expect(myFunc(array)).toEqual([1, 2, 3, 4, 0, 0, 0])

        array = [0, 0, 0, 1, 2, 3]
        expect(myFunc(array)).toEqual([1, 2, 3, 0, 0, 0])


    }
)

