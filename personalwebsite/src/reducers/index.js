import { combineReducers } from "redux";
import navbar from "./navbar";
import content from "./content";
import animation from "./animation";

export default combineReducers({
    navbar,
    content,
    animation,
});
