import React, { Component } from "react";

/**
 * Challenge: Wire up the partially-finished travel form so that it works!
 * Remember to use the concept of controlled forms
 * https://reactjs.org/docs/forms.html
 *
 * All information should be populating the text below the form in real-time
 * as you're filling it out
 *
 * This exercise is adapted from the V School curriculum on vanilla JS forms:
 * https://coursework.vschool.io/travel-form/
 *
 * All of our challenges and learning resources are open for the public
 * to play around with and learn from at https://coursework.vschool.io
 */

class App extends Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            gender: "",
            age: "",
            destination: "ukraine",
            vegetarian: false,
            halal: false,
            lactoseIntolerant: false,
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        let { name, value, checked, type } = event.target;
        this.setState({
            [name]: type === "checkbox" ? checked : value,
        });
    }

    handleSubmit(event) {
        console.log("Submitted: ");
        console.log(JSON.stringify(this.state));
    }

    render() {
        let {
            firstName,
            lastName,
            gender,
            age,
            destination,
            vegetarian,
            halal,
            lactoseIntolerant,
        } = this.state;

        let dietaries = {
            Vegetarian: vegetarian,
            Halal: halal,
            "Lactose intolerant": lactoseIntolerant,
        };
        let dietariesChecked = [];
        Object.keys(dietaries).forEach((k) => {
            if (dietaries[k]) dietariesChecked.push(k);
        });

        return (
            <main>
                <form onSubmit={this.handleSubmit}>
                    <input
                        placeholder="First Name"
                        name="firstName"
                        value={firstName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        placeholder="Last Name"
                        name="lastName"
                        value={lastName}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        placeholder="Age"
                        value={age}
                        type="number"
                        name="age"
                        onChange={this.handleChange}
                    />
                    <br />

                    <label>
                        Male
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            checked={gender === "male"}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />
                    <label>
                        Female
                        <input
                            type="radio"
                            name="gender"
                            value="female"
                            checked={gender === "female"}
                            onChange={this.handleChange}
                        />
                    </label>
                    <br />

                    <select
                        name="destination"
                        value={destination}
                        onChange={this.handleChange}
                    >
                        <option value="canada">Canada</option>
                        <option value="us">The US</option>
                        <option value="ukraine">Ukraine</option>
                    </select>
                    <br />

                    <label>Vegetarian</label>
                    <input
                        type="checkbox"
                        name="vegetarian"
                        checked={vegetarian}
                        onChange={this.handleChange}
                    />

                    <br />
                    <label>Halal</label>
                    <input
                        type="checkbox"
                        name="halal"
                        checked={halal}
                        onChange={this.handleChange}
                    />

                    <br />
                    <label>Lactose intolerant</label>
                    <input
                        type="checkbox"
                        name="lactoseIntolerant"
                        checked={lactoseIntolerant}
                        onChange={this.handleChange}
                    />
                    <br />

                    <button>Submit</button>
                </form>
                <hr />
                <h2>Entered information:</h2>
                <p>Your name: {`${firstName} ${lastName}`}</p>
                <p>Your age: {age}</p>
                <p>Your gender: {gender}</p>
                <p>Your destination: {destination}</p>
                <p>
                    Your dietary restrictions:
                    {dietariesChecked.join(", ")}
                </p>
            </main>
        );
    }
}

export default App;
