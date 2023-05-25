const { sum, mul } = require('../../functions')

const SUM_CASES = {
    CORRECT: 'Sum two numbers correctly'
}
const MUL_CASES = {
    CORRECT: 'Multiply two numbers correctly'
}


// Sum
it( // unit test
    SUM_CASES.CORRECT, // description
    () => {
        expect(sum(1, 4))
            .toBe(5)
        expect(sum(1, -1))
            .toBe(0)
        expect(sum(0, 1000))
            .toBe(1000)
    }
)

describe( // Related tests
    'Functions', // title
    () => {
        // Multiply
        it( // unit test
            MUL_CASES.CORRECT, // description
            () => {
                expect(mul(1, 4))
                    .toBe(4)
                expect(mul(0, 4))
                    .toBe(0)
                expect(mul(1, -1))
                    .toBe(-1)
            }
        )
    }
)


