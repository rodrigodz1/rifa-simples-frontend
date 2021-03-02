import React, { Component } from 'react';
import Tippy from '@tippyjs/react'

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            status: this.props.situation,
            number: this.props.fetch_num,
            className: this.props.className,
            tooltip: 'implementado em breve',
        }

        this.changeColor = this.changeColor.bind(this)


    }

    changeColor = (num) => {
        //num = parseInt(num)
        if (this.state.status == 'reserved' || this.state.status == 'paid') {
            return
        }
        this.setState({ clicked: !this.state.clicked })
        this.setState({ className: "border border-green-600 bg-white text-green-600 m-2 rounded-md hover:bg-green-100" })

        //console.log(num);
        this.props.functionCallFromParent(num);
    }

    render() {
        //let btn_class = "bg-green-600 text-white m-2 rounded-md hover:bg-green-900";
        let btn_status = false;
        let btn_num = this.props.name



        if (this.state.clicked) {
            //btn_class = "border border-green-600 bg-white text-green-600 m-2 rounded-md hover:bg-green-100"
            btn_status = true
        }

        if (this.state.status === 'available') {
            this.state.tooltip = 'Disponível!'
        }

        //console.log(this.props.fetch_num, this.props.situation);
        //if ((this.props.name == this.props.fetch_num) && (this.props.situation == 'reserved')) {
        //    btn_class = "border border-green-600 bg-yellow-100 text-green-600 m-2 rounded-md hover:bg-green-100"
        //    btn_status = true
        //} recebi this.props.fetch_num e this.props.situation. Devo processá-los


        return (

            <>
                <Tippy className="bg-black p-1 text-yellow-300 rounded-md" content={this.state.tooltip} duration={0} interactive={false} interactiveBorder={0} delay={0}>
                    <button className={this.state.className} disabled={btn_status} onClick={() => this.changeColor(this.state.number)}  >

                        {btn_num}
                    </button>
                </Tippy>

            </>

        )
    }
}



export default Button;