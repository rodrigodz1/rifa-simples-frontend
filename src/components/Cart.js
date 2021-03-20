import Link from 'next/link';
import React, { Component, useState } from 'react'
import { Form, Button } from 'semantic-ui-react'
import Router, { withRouter } from 'next/router'
import parsePhoneNumber, { isValidNumber, isValidPhoneNumber, AsYouType } from 'libphonenumber-js'

import { useSelector, useDispatch } from 'react-redux'
import { clickedOnReserved } from '../../features/payment/paymentDetails'
import { connect } from 'react-redux'

import api from '../../api/config'

var name;
var numbers;
var totalPrice;
var tel;
var ticketNumber;

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            numbers: [],
            name: '',
            cel: '',
            rifa_id: parseInt(this.props.rifa_id),
            reservedWasClicked: false
        }


        this.precoDaRifa = this.props.ticket_price

        this.showCart = this.showCart.bind(this)

        this.hideCart = this.hideCart.bind(this)

        this.makeReserve = this.makeReserve.bind(this)


    }

    simpleSvg = () => {
        <svg className=" animate-spin h-5 w-5 mr-3">
            <circle cx="1" cy="1" r="4" stroke="white" stroke-width="5" fill="none" />
        </svg>
    }

    showCart = () => {
        this.setState({ visible: !this.state.visible })

    }

    hideCart = () => {
        this.setState({ numbers: "" })
        this.props.functionCallFromParent("");
    }

    makeReserve = () => {
        console.log(this.props.valueFromParent);
    }

    handleChange = (e, { name, value }) => {
        if (name === 'name') {
            this.setState({ [name]: value })
        } else if ((name === 'cel') && (value.length <= 15)) {
            this.setState({ [name]: new AsYouType('BR').input(value) })
        }
        //console.log(isValidPhoneNumber(this.state.cel, 'BR'));
    }

    handleSubmit = async (event) => {
        this.setState({ reservedWasClicked: true })
        //const response = await api.get('/rifas');
        //console.log(response);
        //const phoneNumber = parsePhoneNumber(this.state.cel, 'BR')
        //console.log(phoneNumber);
        //this.state.name = nome
        //this.state.cel = whatsapp
        //this.props.valueFromParent = array com os numeros escolhidos
        //(this.state.numbers).length * this.precoDaRifa = valor total a ser pago
        //(this.state.cel).length > 8 && (this.state.cel).length < 12

        //console.log('i got here');
        try {
            if ((this.state.name != '') && (isValidPhoneNumber(this.state.cel, 'BR'))) {
                const promises = []

                for (let i = 0; i < (this.props.valueFromParent).length; i++) {
                    promises.push(await api.post('/tickets', {
                        state: "reserved",
                        number: this.props.valueFromParent[i],
                        rifa: this.state.rifa_id,
                        name: this.state.name,
                        telefone: this.state.cel,
                        //gambler_tickets: [response.data.id],
                    }))
                }
                //console.log('i maybe got here');
                var numerosCadastrados = Promise.all(promises);
                let ticket_begin = ''
                let ticket_end = ''
                let ticket_number = '';
                let g_id = 0
                console.log(g_id);
                (await numerosCadastrados).map((tmp, i) => {
                    let tam = ((tmp.data.gambler_tickets).length)
                    if (i == 0) {
                        ticket_begin = tmp.data.gambler_tickets[tam - 1].id + "-"
                        g_id = tmp.data.id + ""
                    }
                    //ticket_end = tmp.data.gambler_tickets[i].id + ""

                    // ticket_number += tmp.data.gambler_tickets[i].id + "-"
                    //console.log(ticket_number);
                })
                let tam = (await numerosCadastrados).length
                ticket_number = g_id + "-" + this.state.rifa_id + "-" + tam
                //let id_pedido = (numerosCadastrados[0].data.gambler_tickets).length
                //let ticket_number = numerosCadastrados[0].data.gambler_tickets[id_pedido - 1].id

                //console.log(response);
                //if (response.data.status == 500) {
                //console.log('improve yourself');
                //    return;
                //}

                //await api.post('/gamblers', {
                // [id do ticket]
                //})

                //alert('Um nome foi enviado: ' + this.state.name);
                event.preventDefault();

                //return <Link passHref={true} href="/" />
                //document.location.reload()
                //location.assign('http://localhost:3000/')
                //this.props.BoardCartCall(this.props.valueFromParent);
                //console.log(this.props.valueFromParent);
                /* REDUX */
                //const paymentDetails = useSelector(selectPaymentDetails)
                //console.log(paymentDetails.personName);
                name = this.state.name;
                totalPrice = (this.precoDaRifa) * (this.props.valueFromParent).length
                numbers = this.props.valueFromParent
                tel = this.state.cel
                ticketNumber = ticket_number

                this.props.payment()
                Router.push({ pathname: '/pagamento' })
            } else {
                this.setState({ reservedWasClicked: false })
                alert('O número/nome digitado não é/são válido(s).')

            }

        } catch (error) {
            this.setState({ reservedWasClicked: false })
            console.log(error.message);
        }

    }


    //functions;;;

    render() {
        this.state.numbers = this.props.valueFromParent

        return (
            <div className={this.props.className}>

                <div className="">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field className="font-bold ">
                            <Form.Input className="" placeholder="Insira seu nome" label="Seu nome:" name="name" value={this.state.name} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field max={15} type="number" className="font-bold">
                            <Form.Input className="" placeholder="Insira seu WhatsApp" label="Seu WhatsApp:" name="cel" value={this.state.cel} onChange={this.handleChange} />
                        </Form.Field>


                        <h1 className="grid grid-cols-5 text-white shadow-xl mx-4"> {this.state.numbers.map(nm =>
                            <div className="text-sm bg-black rounded-md tablet:p-1 m-1">
                                {nm}
                            </div>)}


                        </h1>
                        <div className="text-white text-sm">Ao prosseguir você concorda com nossos <Link href='../termos'>Termos.</Link></div>
                        <Button className="mt-1 bg-yellow-500 text-white p-1 rounded-md" type="submit" disabled={this.state.reservedWasClicked}>
                            <div className="flex">
                                {
                                    this.state.reservedWasClicked ? <svg className=" animate-spin h-5 w-5 mr-3">
                                        <circle cx="1" cy="1" r="4" stroke="white" stroke-width="5" fill="none" />
                                    </svg> : null
                                }
                                <span>Reservar número(s)</span>
                            </div>

                        </Button>


                    </Form>
                </div>
                <div>
                    <p className="text-white font-bold">Total: {(this.state.numbers).length} x {this.precoDaRifa} = R$ {(this.state.numbers).length * this.precoDaRifa}</p>
                    <button onClick={_ => document.location.reload()} className="bg-black text-white p-1 rounded-md" >Limpar carrinho</button>
                </div>

            </div >
        )
    }
}

//export default Cart

const mapDispatchToProps = (dispatch) => {
    //console.log('aaaaaaaaaaaaaA', this.state.name, this.props.valueFromParent, (this.props.ticket_price) * ((this.props.valueFromParent).length));
    return {
        payment: () => dispatch(clickedOnReserved({ personName: name, selectedNumbers: numbers, valueBought: totalPrice, ticketNumber: ticketNumber }))
    }
};
export default connect(null, mapDispatchToProps)(Cart)