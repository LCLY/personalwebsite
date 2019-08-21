//import types
import { SHOW_NAVBAR, HIDE_NAVBAR } from "../actions/types";

//initial states
const initialState = {
    //initial value/bool values
    show: false,
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
        default:
            return state;
    }
}
