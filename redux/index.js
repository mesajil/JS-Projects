const { combineReducers, createStore } = require("redux");

// Action Types

const ActionTypes = {
    INCREMENT_COUNT: "INCREMENT_COUNT",
    DECREMENT_COUNT: "DECREMENT_COUNT",
    RESET_COUNT: "RESET_COUNT",
    ADD_STUDENT: "ADD_STUDENT",
    SET_INSTRUCTOR: "SET_INSTRUCTOR",
    CLEAR_INSTRUCTOR: "CLEAR_INSTRUCTOR",
}

// Action creator
const actionCreator = (type, payload) => ({ type, payload })
const increment = () => store.dispatch(actionCreator(ActionTypes.INCREMENT_COUNT))
const addStudent = (student) => store.dispatch(actionCreator(ActionTypes.ADD_STUDENT, student))


const initialState = {
    count: 0,
    students: [],
    instructor: ""
}


// Store
const reducer = (state = initialState, action) => {

    switch (action.type) {
        case ActionTypes.INCREMENT_COUNT: return {
            ...state,
            count: state.count + 1
        }
        case ActionTypes.DECREMENT_COUNT: return {
            ...state,
            count: state.count - 1
        }
        case ActionTypes.RESET_COUNT: return {
            ...state,
            count: 0
        }
        case ActionTypes.ADD_STUDENT: return {
            ...state,
            students: [...state.students, action.payload]
        }
        case ActionTypes.SET_INSTRUCTOR: return {
            ...state,
            instructor: action.payload
        }
        case ActionTypes.CLEAR_INSTRUCTOR: return {
            ...state,
            instructor: ""
        }
        default: return state;
    }
}

const store = createStore(reducer)


// Test

// store.dispatch(actionCreator(ActionTypes.INCREMENT_COUNT));
// store.dispatch(actionCreator(ActionTypes.RESET_COUNT));
// store.dispatch(actionCreator(ActionTypes.ADD_STUDENT, "George"));
// store.dispatch(actionCreator(ActionTypes.SET_INSTRUCTOR, "Matias"));
// store.dispatch(actionCreator(ActionTypes.CLEAR_INSTRUCTOR));

increment()
increment()
increment()
addStudent('Elon')
addStudent('Mark')

console.log(store.getState());
