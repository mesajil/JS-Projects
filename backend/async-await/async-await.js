const axios = require('axios');
const URL = "https://jsonplaceholder.typicode.com/users";

/**
 * Async-await
 * 
 * You can create and return promises using async-await syntax.
 * You should handle errors inside the function or outside with a try-catch syntax. 
 */

// Using promises
axios(URL)
    .then(({ data }) => {
        const { name } = data[0] // First user
        console.log(`Using promises: ${name}`);
    })


// Example async-await function
async function myAsyncFunction() {
    const { data } = await axios(URL)
    const { name } = data[0] // First user
    console.log(`Using async-await: ${name}`);
}


// Example arrow-function
const myAsyncArrowFunction = async () => {
    const { data } = await axios(URL)
    const { name } = data[0] // First user
    console.log(`Using arrow-functions: ${name}`);
}


// Return a promise
const getUsers = async () => {
    const { data } = await axios(URL)
    return data.map(e => ({
        id: e.id,
        name: e.name
    }))
}


/**
 * Handle a promise with Async-await function
 */
const handleGetUsers = async () => {
    try { // Handle errors
        const users = await getUsers()
        console.log(users);
    }
    catch (error) {
        console.log(error.message);
    }
}

// Return a promise after 'num' seconds
const resolveAfterNumSeconds = (num) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => {
                resolve("Resolved")
            }, num * 1000)
        }
        catch (err) {
            reject(err)
        }
    })
}


// Handle errors
const getUsersTryCatch = async () => {
    try {
        const { data } = await axios(URL + "asdasd")
        return data.map(e => ({
            id: e.id,
            name: e.name
        }))
    } catch (error) {
        return {}
    }
}


// Handle a promise with no try-catch
const handleGetUsersWithNoTryCatch = async () => {
    console.log(await getUsersTryCatch())
}


// Test

// myAsyncFunction()
// myAsyncArrowFunction()
// handleGetUsers()

// getUsers() // Handle promise
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => { // Handle errors
//         console.log(err);
//     })

// resolveAfterNumSeconds(4) // Handle promise
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((err) => { // Handle errors
//         console.log(err);
//     })


// getUsersTryCatch()
//     .then((res) => { // Don't handle errors
//         console.log(res)
//     })

handleGetUsersWithNoTryCatch()