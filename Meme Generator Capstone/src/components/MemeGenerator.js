import React from "react";

class MemeGenerator extends React.Component {
    constructor() {
        super();

        this.state = {
            topText: "",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: [],
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    async loadAllMemeImgs() {
        await fetch("https://api.imgflip.com/get_memes")
            .then((response) => response.json())
            .then((json) => {
                const { memes } = json.data;
                this.setState({ allMemeImgs: memes });
            });
    }

    componentDidMount() {
        this.loadAllMemeImgs();
    }

    handleChange(event) {
        const { name, value } = event.target;

        this.setState({
            [name]: value,
        });
    }

    handleClick(event) {
        event.preventDefault();
        const newImgUrl =
            this.state.allMemeImgs[
                Math.floor(Math.random() * this.state.allMemeImgs.length)
            ].url;
        console.log(newImgUrl);
        this.setState({
            randomImage: newImgUrl,
        });
    }

    render() {
        return (
            <div>
                <form className="meme-form" action="">
                    <input
                        name="topText"
                        type="text"
                        placeholder="Top Text"
                        value={this.state.topText}
                        onChange={this.handleChange}
                    />
                    <input
                        name="bottomText"
                        type="text"
                        placeholder="Bottom Text"
                        value={this.state.bottomText}
                        onChange={this.handleChange}
                    />

                    <button onClick={this.handleClick}>Gen</button>
                </form>
                <div className="meme">
                    <img src={this.state.randomImage} alt="" />
                    <h2 className="top">{this.state.topText}</h2>
                    <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        );
    }
}

export default MemeGenerator;