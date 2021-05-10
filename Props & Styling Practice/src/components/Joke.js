import React from "react";

const Joke = ({ joke }) => {
    const randColor = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${
        Math.random() * 255
    })`;
    const styles = { color: randColor };

    return <p style={styles}>{joke}</p>;
};

export default Joke;
