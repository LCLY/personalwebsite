//actions roles: backend call, dispatch for reducers(change state and rerender), calling other actions/functions
import {
    INSERT_NAVBAR,
    REMOVE_NAVBAR,
    SHOW_NAVBAR,
    HIDE_NAVBAR,
} from "./types";

//logic in actions
//add async if needed
export const showNavbar = show => dispatch => {
    if (show) {
        dispatch({
            //goes to reducer
            type: SHOW_NAVBAR,
        });
    } else {
        dispatch({
            //goes to reducer
            type: HIDE_NAVBAR,
        });
    }

    //e.g. dispatch( someActionFunc() )
};

export const domInsertion = insertDOM => dispatch => {
    if (insertDOM) {
        dispatch({
            //goes to reducer
            type: INSERT_NAVBAR,
        });
    } else {
        dispatch({
            //goes to reducer
            type: REMOVE_NAVBAR,
        });
    }
};
