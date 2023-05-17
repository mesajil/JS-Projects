const promise = new Promise((resolve, reject) => {
    resolve('Hello world')
    reject('Error 404')
})

promise.then(
    (value) => {
        console.log(`My value: ${value}`);
    },
    (reason) => {
        console.log(`My error: ${reason}`);
    }
)