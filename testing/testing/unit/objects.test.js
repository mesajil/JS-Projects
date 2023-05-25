const { myObj, myList } = require('../../functions')


describe(
    "Objects",
    () => {
        it("Has name attribute", () => {
            // hasOwnProperty
            expect(myObj().hasOwnProperty('name')).toBe(true)
        })
        it("Has email attribute", () => {
            // toHaveProperty
            expect(myObj()).toHaveProperty('email') 
        })
        it("Has Luis's data", () => {
            const data = {
                name: 'Luis',
                email: 'lhmesajil@gmail.com',
            }
            expect(myObj()).toEqual(data)
        })
    }
)


describe(
    "Lists",
    () => {
        it("Has 1 element", () => {
            expect(myList()).toContain(1)
        })
    }
)