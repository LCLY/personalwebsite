import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import store from "./store";
import { Provider, ReactReduxContext } from "react-redux";

ReactDOM.render(
    <Provider store={store}>
        <App
            strings={[
                "Hi, I'm Henry.",
                "I am a <strong><i>Software Developer.</i></strong>",
                "I graduated from <strong>Purdue University.</strong>",
                "I do <strong>Web Development.</strong>",
                "I worked with various technologies!",
                "I am trilingual.",
                "I am a <strong>team player.</strong>",
            ]}
        />
    </Provider>,
    document.querySelector("#root"),
);
