import { data } from 'autoprefixer';
import React, { Component } from 'react';
import Button from './Button';
import Cart from './Cart';

class Board extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value_key: [],
            Are_Numbers_Fetched: false,
            fetch_Numbers: this.props.tickets,
            rifa_id: this.props.rifa_id,
            ticket_price: this.props.ticket_price,
            total_tickets: this.props.total_tickets
        }

        this.numbers = {
            reserveds: [],
            paids: []
        }

        this.owner = [{
            name: '',
            number: ''
        }]


    }

    async componentDidMount() {
        //const { API_URL } = process.env
        //const res = await fetch(`${API_URL}/tickets`)

        //const data = this.props.tickets


        //this.setState({ fetch_Numbers: this.props.tickets })

        //console.log(this.state.fetch_Numbers);
        //console.log(this.props.gamblers);

        for (let i = 0; i < this.state.fetch_Numbers.length; i++) {

            if (this.state.fetch_Numbers[i].state === 'reserved') {

                let tmp = this.state.fetch_Numbers[i].gambler
                if ((this.props.gamblers.find(x => x.id === tmp)).name) {
                    this.owner.push({ name: (this.props.gamblers.find(x => x.id === tmp)).name, number: this.state.fetch_Numbers[i].number });

                }
                this.numbers.reserveds.push(this.state.fetch_Numbers[i].number);

            } else if (this.state.fetch_Numbers[i].state === 'paid') {

                let tmp = this.state.fetch_Numbers[i].gambler
                if ((this.props.gamblers.find(x => x.id === tmp)).name) {
                    this.owner.push({ name: (this.props.gamblers.find(x => x.id === tmp)).name, number: this.state.fetch_Numbers[i].number });

                }
                this.numbers.paids.push(this.state.fetch_Numbers[i].number);

            }

            //this.state.fetch_Numbers[i].state == 'reserved' ? this.numbers.reserveds.push(this.state.fetch_Numbers[i].number) : null
            //this.state.fetch_Numbers[i].state == 'paid' ? this.numbers.paids.push(this.state.fetch_Numbers[i].number) : null

        }
        //console.log(this.owner);
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
        //console.log(num);
    }


    render() {
        const botoes = []
        //const totalTickets = this.state.total_tickets

        for (let i = 0; i < this.state.total_tickets; i++) {
            botoes.push(i)
        }

        //let btn_class = "bg-green-600 text-white m-2 rounded-md hover:bg-green-900";

        if (this.state.clicked) {
            btn_class = "border border-green-600 bg-white text-green-600 m-2 rounded-md hover:bg-green-900"
        }

        let fetch_num = this.state.total_tickets
        let situation = 'available'
        let className = ''

        return (
            <div>

                <div className={this.props.className}>
                    {
                        this.state.Are_Numbers_Fetched ?

                            botoes.map((botao, i) => {
                                //let count = 0

                                if (botao < 10) {
                                    if (this.state.total_tickets === 10000) {
                                        botao = "000" + botao
                                    }
                                    else if (this.state.total_tickets === 1000) {
                                        botao = "00" + botao
                                    }
                                    else if (this.state.total_tickets === 100) {
                                        botao = "0" + botao
                                    }

                                } else if (botao < 100 && botao > 9) {
                                    if (this.state.total_tickets === 10000) {
                                        botao = "00" + botao
                                    }
                                    if (this.state.total_tickets === 1000) {
                                        botao = "0" + botao
                                    }
                                    if (this.state.total_tickets === 100) {
                                        botao = "" + botao
                                    }
                                }

                                if (this.numbers.reserveds.includes(parseInt(botao))) {
                                    className = "bg-yellow-600 text-white m-2 rounded-md ";
                                    situation = 'reserved'
                                    //console.log(count);
                                    fetch_num = botao
                                } else if (this.numbers.paids.includes(parseInt(botao))) {
                                    className = "bg-red-600 text-white m-2 rounded-md ";
                                    situation = 'paid'
                                    fetch_num = botao
                                } else {
                                    className = "bg-green-600 text-white m-2 rounded-md hover:bg-green-900 shadow-xl";
                                    situation = 'available'
                                    fetch_num = botao
                                }

                                //console.log(i);
                                return <Button owner={this.owner} className={className} fetch_num={fetch_num} situation={situation} valueFromParent={this.state.value_key} functionCallFromParent={this.parentFunction.bind(this)} name={botao} />
                            })

                            : null
                    }



                </div>
                {this.state.value_key != '' ? <Cart className="grid grid-cols-1 sticky flex w-full bottom-0 text-center bg-green-600 pb-2 pt-2 "

                    valueFromParent={this.state.value_key}
                    rifa_id={this.state.rifa_id}
                    ticket_price={this.state.ticket_price} /> : null}




            </div>
        );
    }
}
export default Board;