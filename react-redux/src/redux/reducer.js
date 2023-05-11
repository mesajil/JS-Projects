import ActionTypes from './actionTypes'

const initialState = {
    count: 0,
    characters: [],
    characterDetail: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        // characters
        case ActionTypes.GET_CHARACTERS:
            return { ...state, characters: action.payload }
        case ActionTypes.ADD_CHARACTER:
            return { ...state, characters: [...state.characters, action.payload] }
        case ActionTypes.REMOVE_CHARACTER:
            return { ...state, characters: state.characters.filter(e => e.id !== action.payload) }
        case ActionTypes.REMOVE_CHARACTERS:
            return { ...state, characters: [] }

        // characterDetail
        case ActionTypes.GET_CHARACTER_DETAIL:
            return { ...state, characterDetail: action.payload }
        case ActionTypes.REMOVE_CHARACTER_DETAIL:
            return { ...state, characterDetail: {} }

        // count
        case ActionTypes.INCREMENT_COUNT:
            return { ...state, count: state.count + 1 }
        case ActionTypes.DECREMENT_COUNT:
            return { ...state, count: state.count - 1 }
        case ActionTypes.RESET_COUNT:
            return { ...state, count: 0 }
        default: return state;
    }
}

