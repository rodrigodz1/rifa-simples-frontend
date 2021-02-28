import Link from 'next/link'
import React, { Component, useState } from 'react'
import { Form, Button } from 'semantic-ui-react'

import api from '../../api/config'

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            numbers: [],
            name: '',
            cel: '',
            rifa_id: parseInt(this.props.rifa_id)
        }

        this.precoDaRifa = 10

        this.showCart = this.showCart.bind(this)

        this.hideCart = this.hideCart.bind(this)

        this.makeReserve = this.makeReserve.bind(this)


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
        //console.log(name, value)
        this.setState({ [name]: value })
    }

    handleSubmit = async (event) => {
        //const response = await api.get('/rifas');
        //console.log(response);

        //this.state.name = nome
        //this.state.cel = whatsapp
        //this.props.valueFromParent = array com os numeros escolhidos
        //(this.state.numbers).length * this.precoDaRifa = valor total a ser pago
        try {
            if (this.state.name != '' && (this.state.cel).length > 8 && (this.state.cel).length < 12) {
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

                Promise.all(promises)
                    .then(numerosCadastrados => {
                        console.log(numerosCadastrados);
                    })

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
                document.location.reload()
            } else {
                alert('dados incorretos.....')
            }

        } catch (error) {
            alert('erro oa inserir dados')
        }

    }


    //functions;;;

    render() {
        this.state.numbers = this.props.valueFromParent

        return (
            <div className={this.props.className}>

                <div className="border-green-400 border-r-2 pr-2 pb-2">
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Field className="font-bold rounded-md bg-green-500">
                            <Form.Input placeholder="Insira seu nome" label="Nome" name="name" value={this.state.name} onChange={this.handleChange} />
                        </Form.Field>
                        <Form.Field className="font-bold bg-green-500">
                            <Form.Input className="" placeholder="Insira seu WhatsApp" label="WhatsApp" name="cel" value={this.state.cel} onChange={this.handleChange} />
                        </Form.Field>
                        <Button className="mt-1 bg-yellow-500 text-white p-1 rounded-md" type="submit">Reservar número(s)</Button>
                    </Form>
                </div>

                <div className="border-green-400 border-l-2 pl-2 ">
                    <h1 className="text-white ">Números: {this.state.numbers + " "} </h1>
                    <p className="text-white">Total: R$ {(this.state.numbers).length * this.precoDaRifa}</p>



                    <button onClick={_ => document.location.reload()} className="bg-black text-white ml-2 mb-2 p-1 rounded-md" >Limpar carrinho</button>
                </div>



            </div >
        )
    }
}

export default Cart