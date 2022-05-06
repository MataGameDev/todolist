import React, { Component } from 'react';
import './Intercambio.css';

class Intercambio extends Component {
constructor(){
    super()
    this.state = {
        dolares: 0,
        coins: 0,
        message: "",
        type: "",

    }
}

handleOnChange = e => {
    //const value = e.target.value
    const {target: {value}} = e;
    if(e.keyCode === 13) {
        e.preventDefault();
    }
        this.setState({
            dolares: value
        });
}
handleOnClick = () =>{
    const dolar = this.state.dolares;
    let texto = this.state.message;
    let clase = this.state.type;

    let intercambio = dolar/10;

    if (dolar%10 === 0){
        texto = "";
        clase = "";
    }
    else{
        intercambio = 0;
        texto = "Ese no es un numero multiplo de 10";
        clase = "Error";

    }
    this.setState({
        coins: intercambio,
        message: texto,
        type: clase
    })

}


  render() {
    return (
      <div className="intercambio">
        <h2>Comprar MataCoins</h2>
        <p/>
        <h1>Tus Dolares a Invertir</h1>
        <input
            type="number"
            value = {this.state.dolares}
            onChange = {this.handleOnChange}
        />
        <button onClick={this.handleOnClick}>Click Aqui para Calcular</button>
        <h1>el Precio de Matacoin es de 10$ Dolares</h1>
        <h2>Puedes comprar: {this.state.coins}  Matacoins </h2>
        <h2 className={this.state.type}>{this.state.message} </h2>
      </div>
    )
  }
}

export default Intercambio;