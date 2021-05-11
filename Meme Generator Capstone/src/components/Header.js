import React from "react";

const Header = (props) => {
    return (
        <header style={styles.header}>
            <img
                style={styles.img}
                src="https://pngimg.com/uploads/trollface/trollface_PNG19.png"
                alt="Problem?"
            />
            <h1 style={styles.h1}>Meme Generator</h1>
        </header>
    );
};

const styles = {
    img: {
        height: "150px",
        margin: "0 10%",
    },
    header: {
        background:
            "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(238, 201, 15, 1) 100%)",
    },
    h1: {
        fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
        width: "50%",
        float: "right",
    },
};

export default Header;
