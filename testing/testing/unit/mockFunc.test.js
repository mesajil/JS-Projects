const { sum2 } = require('../../functions')



describe(
    "Mock functions",
    () => {

        const sum = jest.fn((a, b) => a + b)
        sum2(4, 5, sum)
        console.log(sum.mock); // dev log
        const { calls, results } = sum.mock

        it("Run the callback 1 time", () => {
            expect(calls.length).toBe(1)
        })

        it("Sums correctly", () => {
            expect(results[0].value).toBe(9)
        })
    }
)