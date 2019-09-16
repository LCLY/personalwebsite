//import types
import { START_TYPING, SHOW_BUTTONS, SHOW_CARDS } from "../actions/types";

//initial states
const initialState = {
    //initial value/bool values
    show_Typing: false,
    show_Buttons: false,
    show_Cards: false,
    opacity: 0,
    cardOpacity: 0,
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
            return {
                ...state,
                show_Typing: true,
                opacity: payload,
            };
        case SHOW_CARDS:
            return {
                ...state,
                show_Cards: true,
                cardOpacity: payload,
            };
        default:
            return state;
    }
}
