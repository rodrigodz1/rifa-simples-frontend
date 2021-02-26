import React, { Component } from 'react';
import Button from './Button';
import Cart from './Cart';
class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value_key: [],
            Are_Numbers_Fetched: false,
            fetch_Numbers: {},
        }

        this.numbers = {
            reserveds: [],
            paids: []
        }
    }

    async componentDidMount() {
        const { API_URL } = process.env
        const res = await fetch(`${API_URL}/tickets`)

        const data = await res.json()

        this.setState({ fetch_Numbers: data })

        for (let i = 0; i < data.length; i++) {

            this.state.fetch_Numbers[i].state == 'reserved' ? this.numbers.reserveds.push(this.state.fetch_Numbers[i].number) : null
            this.state.fetch_Numbers[i].state == 'paid' ? this.numbers.paids.push(this.state.fetch_Numbers[i].number) : null

        }
        //console.log(this.numbers.reserveds.includes(200));
        this.setState({ Are_Numbers_Fetched: true })
        //console.log(this.state.fetch_Numbers[1].number);

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

        let fetch_num = 1000
        let situation = 'available'
        let className = ''

        return (
            <div className={this.props.className}>
                {
                    this.state.Are_Numbers_Fetched ?

                        botoes.map((botao, i) => {

                            if (this.numbers.reserveds.includes(botao)) {
                                className = "bg-yellow-600 text-white m-2 rounded-md ";
                                situation = 'reserved'
                                fetch_num = botao
                            } else if (this.numbers.paids.includes(botao)) {
                                className = "bg-red-600 text-white m-2 rounded-md ";
                                situation = 'paid'
                                fetch_num = botao
                            } else {
                                className = "bg-green-600 text-white m-2 rounded-md hover:bg-green-900";
                                situation = 'available'
                                fetch_num = botao
                            }

                            return <Button className={className} fetch_num={fetch_num} situation={situation} valueFromParent={this.state.value_key} functionCallFromParent={this.parentFunction.bind(this)} name={botao} />
                        })

                        : null
                }


                { this.state.value_key != "" ? <Cart className="sticky flex w-screen justify-center bottom-0 text-center bg-green-800 pb-2 pt-2 align-center"
                    functionCallFromParent={this.parentFunction.bind(this)}
                    valueFromParent={this.state.value_key} /> : null}
            </div>
        );
    }
}
export default Board;