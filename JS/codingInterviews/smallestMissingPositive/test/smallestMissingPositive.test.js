const myFunc = require('../src/smallestMissingPositive')

const shuffledArray = (array) => array.sort(
    (a, b) => 0.5 - Math.random()
);

it(
    "Should return the smallest number when an empty array of integers is given",
    () => {
        let array = []
        expect(myFunc(array)).toBe(1)
    }
)

it(
    "Should return the smallest number when the array of integers not have the number one",
    () => {
        let array = shuffledArray([2, 3, 4])
        expect(myFunc(array)).toBe(1)

        array = shuffledArray([5, 7, 9])
        expect(myFunc(array)).toBe(1)

        array = shuffledArray([10, 100, 1000])
        expect(myFunc(array)).toBe(1)
    }
)

it(
    "Should return the smallest number when the array of integers have the number one",
    () => {
        let array = [1]
        expect(myFunc(array)).toBe(2)

        array = shuffledArray([1, 2, 3, 5])
        expect(myFunc(array)).toBe(4)

        array = shuffledArray([1, 2, 3, 4])
        expect(myFunc(array)).toBe(5)

        array = shuffledArray([1, 2, 3, 4, 5, 6, 7, 8, 9])
        expect(myFunc(array)).toBe(10)
    }
)


