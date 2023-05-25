
let users = []

const getUsers = () => {
    return users;
}

const getUserById = (id) => {
    return users.find(e => e.id === id)
}


const getUsersByName = (name) => {
    const usersFound = users.filter(e => e.name === name)
    if (usersFound.length) return usersFound
    return { error: `User with the name "${name}" not found` }
}


let id = 1
const createNewUser = (data) => {
    const { name, email } = data;
    if (!name) throw Error(`Undefined name`)
    if (!email) throw Error(`Undefined email`)
    newUser = { id: id++, name, email, posts: [] }
    users.push(newUser)
    return newUser
}


const updateUser = (data) => {
    const { id, name, email } = data;
    if (!id) return { error: `The id "${id}" is undefined` }
    if (!name && !email) return { error: `User data are undefined` }
    const user = users.find(e => e.id === id)
    if (!user) return { error: `Cannot find a user with the id "${id}"` }
    user.name = name ? name : user.name
    user.email = email ? email : user.email
    return user;
}


const deleteUser = (id) => {
    if (!id) return { error: `The id "${id}" is undefined` }
    const user = users.find(e => e.id === id)
    if (!user) return { error: `Cannot find a user with the id "${id}"` }
    users = users.filter(e => e.id !== id)
    return user
}

module.exports = {
    getUsers,
    getUserById,
    getUsersByName,
    createNewUser,
    updateUser,
    deleteUser,
}