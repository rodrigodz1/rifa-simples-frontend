import React, { Component, useState } from 'react'

class Cart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            visible: false,
            numbers: []
        }

        this.precoDaRifa = 10

        this.showCart = this.showCart.bind(this)

        this.hideCart = this.hideCart.bind(this)
    }

    showCart = () => {
        this.setState({ visible: !this.state.visible })

    }

    hideCart = () => {
        this.setState({ numbers: "" })
        this.props.functionCallFromParent("");
    }

    //functions;;;

    render() {
        this.state.numbers = this.props.valueFromParent

        return (
            <div className={this.props.className}>

                <div className="border-green-400 border-r-2 pr-2 pb-2">
                    <p className="font-bold">Nome</p>
                    <input className="rounded-md placeholder-black pl-1" placeholder=" Mariano Souza" />
                    <p className="font-bold">WhatsApp</p>
                    <input className="rounded-md placeholder-black pl-1" placeholder=" (12) 34567-8901" />
                </div>

                <div className="border-green-400 border-l-2 pl-2 ">
                    <h1 className="text-white ">Números: {this.state.numbers + " "} </h1>
                    <p className="text-white">Total: R$ {(this.state.numbers).length * this.precoDaRifa}</p>

                    <button className="bg-yellow-600 text-white mr-2 mb-2 p-1 rounded-md">Reservar números</button>

                    <button onClick={_ => document.location.reload()} className="bg-black text-white ml-2 mb-2 p-1 rounded-md" >Limpar carrinho</button>
                </div>



            </div >
        )
    }
}

export default Cart