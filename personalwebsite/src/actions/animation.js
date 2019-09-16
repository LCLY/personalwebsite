//actions roles: backend call, dispatch for reducers(change state and rerender), calling other actions/functions
import { SHOW_BUTTONS, START_TYPING } from "./types";

//logic in actions
//add async if needed

export const showTyping = show_Typing => dispatch => {
    if (show_Typing) {
        dispatch({
            //goes to reducer
            type: START_TYPING,
            payload: 1,
        });
        //e.g. dispatch( someActionFunc() )
    }
};

export const showButtons = show_Buttons => dispatch => {
    if (show_Buttons) {
        dispatch({
            //goes to reducer
            type: SHOW_BUTTONS,
        });
    }
};
