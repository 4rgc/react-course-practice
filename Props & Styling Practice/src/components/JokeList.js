import React from "react";
import Joke from "./Joke";

const JokeList = ({ jokes }) => {
    return (
        <div>
            {jokes.map((jokeObj) => (
                <Joke key={jokeObj.map} joke={jokeObj.joke} />
            ))}
        </div>
    );
};

export default JokeList;
