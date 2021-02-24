import React, { Component } from 'react';
import Button from './Button';
import Cart from './Cart';
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value_key: []
        }
    }



    parentFunction = (data_from_child) => {
        if (data_from_child == "") {
            this.setState({ value_key: [] });
        } else
            this.setState({ value_key: this.state.value_key.concat(data_from_child) });
    }

    changeColor = (num) => {
        this.setState({ clicked: !this.state.clicked })
        console.log(num);
    }

    render() {
        const botoes = []
        for (let i = 0; i < 1000; i++) {
            botoes.push(i)
        }

        let btn_class = "bg-green-600 text-white m-2 rounded-md hover:bg-green-900";

        if (this.state.clicked) {
            btn_class = "border border-green-600 bg-white text-green-600 m-2 rounded-md hover:bg-green-900"
        }



        return (
            <div className={this.props.className}>
                {
                    botoes.map((botao, i) => {
                        return <Button valueFromParent={this.state.value_key} functionCallFromParent={this.parentFunction.bind(this)} name={botao} />
                    })
                }


                { this.state.value_key != "" ? <Cart className="sticky flex w-screen justify-center bottom-0 text-center bg-green-800 pb-2 pt-2 align-center"
                    functionCallFromParent={this.parentFunction.bind(this)}
                    valueFromParent={this.state.value_key} /> : null}
            </div>
        );
    }
}
export default Board;