import React, { Component } from "react";
import './Crypto.css';
class Crypto extends Component {
    constructor() {
        super();
        this.state ={
            dollars:0
        };
    }

    handleOnChange = e => {
        this.setState({
            dollars:Number(e.target.value)
        });
    }

    shouldComponentUpdate(props,state){
        return !(state.dollars % 10);
    }


    render(){
        return(
            <div className="Coins">
                <h1>Compra Cryptocoins</h1>
                <div className ="question">
                    <p>¿cuántos dólares tienes?</p>
                    <p>
                        <input
                            placeholder="0"
                            onChange={this.handleOnChange}
                            type='number'
                        />
                    </p>
                </div>
                <div className="answer">
                    <p>precio de Cryptocoin : $10</p>
                    <p>
                        Puedes comprar <strong>{this.state.dollars/10}</strong> coins.
                    </p>

                </div>
            </div>
        );
    }
}

export default Crypto;