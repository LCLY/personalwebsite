//import types
import {
    SHOW_NAVBAR,
    HIDE_NAVBAR,
    INSERT_NAVBAR,
    REMOVE_NAVBAR,
} from "../actions/types";

//initial states
const initialState = {
    //initial value/bool values
    show: false,
    insert: false,
};
//reducer function
export default function(state = initialState, action) {
    //destructure the action
    const { type, payload } = action;

    //switch case
    switch (type) {
        case SHOW_NAVBAR:
            return {
                ...state,
                show: true,
            };
        case HIDE_NAVBAR:
            return {
                ...state,
                show: false,
            };
        case INSERT_NAVBAR:
            return {
                ...state,
                insert: true,
            };
        case REMOVE_NAVBAR:
            return {
                ...state,
                insert: false,
            };
        default:
            return state;
    }
}
