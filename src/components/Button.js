import React, { Component } from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            clicked: false,
            status: this.props.situation,
            number: this.props.fetch_num,
            className: this.props.className
        }

        this.changeColor = this.changeColor.bind(this)
    }





    changeColor = (num) => {
        if (this.state.status == 'reserved' || this.state.status == 'paid') {
            return
        }
        this.setState({ clicked: !this.state.clicked })
        this.setState({ className: "border border-green-600 bg-white text-green-600 m-2 rounded-md hover:bg-green-100" })

        //console.log(num);
        this.props.functionCallFromParent(num);
    }

    render() {
        let btn_class = "bg-green-600 text-white m-2 rounded-md hover:bg-green-900";
        let btn_status = false;
        let btn_num = this.props.name

        if (btn_num < 10) {
            btn_num = "00" + btn_num
        } else if (btn_num < 100 && btn_num > 9) {
            btn_num = "0" + btn_num
        }

        if (this.state.clicked) {
            //btn_class = "border border-green-600 bg-white text-green-600 m-2 rounded-md hover:bg-green-100"
            btn_status = true
        }



        //console.log(this.props.fetch_num, this.props.situation);
        //if ((this.props.name == this.props.fetch_num) && (this.props.situation == 'reserved')) {
        //    btn_class = "border border-green-600 bg-yellow-100 text-green-600 m-2 rounded-md hover:bg-green-100"
        //    btn_status = true
        //} recebi this.props.fetch_num e this.props.situation. Devo processá-los


        return (

            <>

                <button className={this.state.className} disabled={btn_status} onClick={() => this.changeColor(this.state.number)}  >

                    {btn_num}
                </button>

            </>

        )
    }
}



export default Button;