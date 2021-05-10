import React from "react";

const ToDoItem = ({ done, text, onChange }) => {
    const styles = { marginRight: 10 };

    return (
        <span>
            <input
                type="checkbox"
                style={styles}
                checked={done}
                onChange={onChange}
            />
            {text}
        </span>
    );
};

export default ToDoItem;
