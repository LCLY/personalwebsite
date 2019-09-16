//actions roles: backend call, dispatch for reducers(change state and rerender), calling other actions/functions
import { SHOW_BUTTONS, START_TYPING } from "./types";

//logic in actions
//add async if needed
export const showTyping = () => dispatch => {
    dispatch({
        //goes to reducer
        type: START_TYPING,
    });

    //e.g. dispatch( someActionFunc() )
};

export const showButtons = () => dispatch => {
    dispatch({
        //goes to reducer
        type: SHOW_BUTTONS,
    });
};
