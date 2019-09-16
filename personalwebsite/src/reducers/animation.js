//import types
import { START_TYPING, SHOW_BUTTONS } from "../actions/types";

//initial states
const initialState = {
    //initial value/bool values
    startTyping: false,
    showButtons: false,
};
//reducer function
export default function(state = initialState, action) {
    //destructure the action
    const { type, payload } = action;

    //switch case
    switch (type) {
        case SHOW_BUTTONS:
            return {
                ...state,
                showButtons: true,
            };
        case START_TYPING:
            return { ...state, startTyping: true };

        default:
            return state;
    }
}
