


const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const sum2 = (a, b, cb) => cb(a, b)

const myObj = () => ({
    name: 'Luis',
    email: 'lhmesajil@gmail.com',
})

const myList = () => ([1, 2, 3])

const myPromise = () => (
    new Promise(
        (resolve, rejected) => {
            resolve(myObj())
            // resolve({})
        }
    )
)


module.exports = {
    sum,
    mul,
    sum2,
    myObj,
    myList,
    myPromise,
}