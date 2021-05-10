import React from "react";

const ToDoItem = ({ done, text, onChange }) => {
    const completedStyle = {
        color: "grey",
        fontStyle: "italic",
        textDecoration: "line-through",
    };

    return (
        <div>
            <input type="checkbox" checked={done} onChange={onChange} />
            <span style={done ? completedStyle : null}>{text}</span>
        </div>
    );
};

export default ToDoItem;
