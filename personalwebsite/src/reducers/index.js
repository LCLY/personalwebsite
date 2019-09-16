import { combineReducers } from "redux";
import navbar from "./navbar";
import content from "./content";
export default combineReducers({
    navbar,
    content,
    animation,
});
