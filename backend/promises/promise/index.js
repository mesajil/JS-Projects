const promise = new Promise((resolve, reject) => {
    reject('Error 404')
    resolve('Hello world')
})
const fulfilled = new Promise((resolve, _) => resolve('I was fulfilled'))
const rejected = new Promise((_, reject) => reject('I was rejected'))

// Case 1 and 2: Handle resolve and rejected cases
promise
    .then(
        (value) => {
            console.log(`successHandler 1: ${value}`);
        },
        (reason) => {
            console.log(`errorHandler 2: ${reason}`);
        }
    )

// Case 3 and 4: no successHandler or errorHandler
promise
    .then()
    .then(
        (value) => {
            console.log(`successHandler 3: ${value}`);
        },
        (reason) => {
            console.log(`errorHandler 4: ${reason}`);
        }
    )

// Case 6: Return an error
rejected
    .then(
        (value) => value,
        // (reason) => reason // Don't return an error
        (reason) => { throw reason }
    )
    .then(
        (value) => {
            console.log(`successHandler 6: ${value}`);
        },
        (reason) => {
            console.log(`errorHandler 6: ${reason}`);
        }
    )

// Case 7: Return a promise
fulfilled
    .then(
        (_) => promise,
        (reason) => { throw reason }
    )
    .then(
        (value) => {
            console.log(`successHandler 7: ${value}`);
        },
        (reason) => {
            console.log(`errorHandler 7: ${reason}`);
        }
    )