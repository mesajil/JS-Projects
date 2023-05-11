import actionTypes from './actionTypes'

const actionCreator = (type, payload) => ({ type, payload })

// characters

export const addCharacter = (character) => actionCreator(actionTypes.ADD_CHARACTER, character)
export const removeCharacter = (id) => actionCreator(actionTypes.REMOVE_CHARACTER, id)
export const removeCharacters = () => actionCreator(actionTypes.REMOVE_CHARACTERS)

export const getCharacters = () => function (dispatch) {
    // fetch
    return fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => dispatch(actionCreator(actionTypes.GET_CHARACTERS, data)))

    // axios
    // return axios('https://jsonplaceholder.typicode.com/users')
    //     .then(response => dispatch(actionCreator(actionTypes.GET_CHARACTERS, response.data)))
}
// const getCharacters = () => {
//     const characters = [
//         { id: 1, name: "??" },
//         { id: 2, name: "xd??" },
//         { id: 3, name: "xd??" },
//     ]
//     return actionCreator(actionTypes.GET_CHARACTERS, characters)
// }


// characterDetail

export const removeCharacterDetail = () => actionCreator(actionTypes.REMOVE_CHARACTER_DETAIL)

export const getCharacterDetail = (id) => function (dispatch) {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(response => response.json())
        .then(data => dispatch(actionCreator(actionTypes.GET_CHARACTER_DETAIL, data)))
}


