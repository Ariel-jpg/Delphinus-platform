import {
    ACTION
} from "./home.actions.js";

const initialState = {
    number: 0 
}

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case ACTION: return { ...state, number: (state.number + action.new_number) }

        default:
            return state;
    }
}

export default homeReducer;