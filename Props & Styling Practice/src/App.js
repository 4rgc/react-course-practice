import React from "react";
import JokeList from "./components/JokeList";
import jokes from "./jokes";

const App = () => {
    return <JokeList jokes={jokes} />;
};

export default App;
