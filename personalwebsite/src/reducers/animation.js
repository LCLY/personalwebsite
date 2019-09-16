//import types
import { START_TYPING, SHOW_BUTTONS } from "../actions/types";

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

        default:
            return state;
    }
}
