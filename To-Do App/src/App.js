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
            let newState = { ...prevState, todos: prevState.todos.slice() };
            let changedTodo = newState.todos.find((t) => t.id === id);
            changedTodo.completed = !changedTodo.completed;
            return newState;
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
