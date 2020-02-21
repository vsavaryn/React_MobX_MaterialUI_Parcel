import React from "react";
import Album from "./Album";
import Store from './Store';

const store = new Store();

const App = () => {
    return (
        <Album store={store} />
    );
};

export default App;
