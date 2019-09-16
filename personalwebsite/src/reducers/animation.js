//import types
import { START_TYPING, SHOW_BUTTONS } from "../actions/types";

//initial states
const initialState = {
    //initial value/bool values
    show_Typing: false,
    show_Buttons: false,
    opacity: 0,
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
                show_Buttons: true,
            };
        case START_TYPING:
            return { ...state, show_Typing: true, opacity: payload };

        default:
            return state;
    }
}
