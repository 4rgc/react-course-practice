import React from "react";
import ToDoItem from "./components/ToDoItem";
import todoData from "./todoData";
import "./style/style.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            todos: todoData,
        };
    }

    handleCheck(id) {
        this.setState((prevState) => {
            let newTodos = prevState.todos.map((t) => {
                if (t.id === id) return { ...t, completed: !t.completed };
                return t;
            });
            return { todos: newTodos };
        });
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.todos.map((t) => (
                        <li key={t.id}>
                            <ToDoItem
                                text={t.text}
                                done={t.completed}
                                onChange={() => this.handleCheck(t.id)}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

export default App;
