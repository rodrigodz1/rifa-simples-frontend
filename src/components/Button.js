import React, { Component } from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false
        }


        this.changeColor = this.changeColor.bind(this)
    }

    changeColor = (num) => {
        this.setState({ clicked: !this.state.clicked })
        //console.log(num);
        this.props.functionCallFromParent(num);
    }

    render() {
        let btn_class = "bg-green-600 text-white m-2 rounded-md hover:bg-green-900";
        let btn_status = false;

        if (this.state.clicked) {
            btn_class = "border border-green-600 bg-white text-green-600 m-2 rounded-md hover:bg-green-100"
            btn_status = true
        }


        return (

            <button className={btn_class} disabled={btn_status} onClick={() => this.changeColor(this.props.name)}  >
                {this.props.name}
            </button>


        )
    }
}
export default Button;