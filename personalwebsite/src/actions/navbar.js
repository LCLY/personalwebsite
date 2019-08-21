//actions roles: backend call, dispatch for reducers(change state and rerender), calling other actions/functions
import { SHOW_NAVBAR, HIDE_NAVBAR } from "./types";

//logic in actions
//add async if needed
export const toggleHidden = hideShow => dispatch => {
    if (!hideShow) {
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
