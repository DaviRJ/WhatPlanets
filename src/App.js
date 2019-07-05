import React from "react";
import { Provider } from "react-redux";
import { Store } from "./store";

import Window from "./components/Window";

const App = () => (
    <Provider store={Store}>
        <div className="Main">
            {" "}
            <Window />{" "}
        </div>
    </Provider>
);

export default App;
