import React from "react";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user: "",
            loggedIn: false,
        };

        this.handleUsernameInput = this.handleUsernameInput.bind(this);
        this.handleLogIn = this.handleLogIn.bind(this);
        this.handleLogOut = this.handleLogOut.bind(this);
    }

    handleUsernameInput(e) {
        this.setState(({ loggedIn }) => {
            return { user: e.target.value, loggedIn };
        });
    }

    handleLogIn() {
        this.setState(({ user }) => {
            return { user, loggedIn: true };
        });
    }

    handleLogOut() {
        this.setState({
            user: "",
            loggedIn: false,
        });
    }

    render() {
        return (
            <div style={{ margin: "auto", width: "50%" }}>
                {!this.state.loggedIn ? (
                    <input
                        type="text"
                        value={this.state.user}
                        onChange={this.handleUsernameInput}
                    />
                ) : (
                    <h1>Welcome, {this.state.user}!</h1>
                )}
                {!this.state.loggedIn && (
                    <button onClick={this.handleLogIn}>Log In</button>
                )}
                {this.state.loggedIn && (
                    <button onClick={this.handleLogOut}>Log Out</button>
                )}
            </div>
        );
    }
}

export default App;
