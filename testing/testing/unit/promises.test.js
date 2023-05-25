const { myPromise } = require('../../functions')

const USER = {
    name: 'Luis',
    email: 'lhmesajil@gmail.com',
}

describe(
    "Promises",
    () => {
        it("User data is returned", () => {
            return myPromise().then((data) => {
                expect(data).toEqual(USER)
            })
        })
    }
)