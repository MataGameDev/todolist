import React, { Component } from 'react';
import './Calculator.css';
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: '',
            number2: '',
            resultado: '',
            operacion: ''
        }
    }
    handleOnClick = () => {
        const num1 = this.state.number1;
        const num2 = this.state.number2;
        const operacion = this.state.operacion;
        let resultados;
        if (operacion === '+') {
            resultados = num1 + num2;
        } else if (operacion === '-') {
            resultados = num1 - num2;
        } else if (operacion === '*') {
            resultados = num1 * num2;
        } else if (operacion === '/') {
            resultados = num1 / num2;
        }
        this.setState({
            resultado: resultados
        })
    }
    handleNumberChange1 = e => {
        if (e.keyCode === 13) {
            e.preventDefault();
        }
        this.setState({
            number1: Number(e.target.value)
        });
    }
    handleNumberChange2 = e => {

        if (e.keyCode === 13) {
            e.preventDefault();
        }
        this.setState({
            number2: Number(e.target.value)
        });
    }
    handleChangeOperacion = e => {
        const { target: { value } } = e;
        console.log(value);
        this.setState({
            operacion: value,
        })
    }

    render() {
        const { number1, number2, resultado, operacion } = this.state;
        return ( 
            <div>
                <input Name="input"
                    type = "text"
                    value = {number1}
                    onChange = {this.handleNumberChange1}
                />
                <form>
                    <label>
                        <select value ={operacion} onChange={this.handleChangeOperacion}>
                            <option value="void">↓</option>
                            <option value = "+"> + </option>
                            <option value = "-"> - </option>
                            <option value = "*"> x </option>
                            <option value = "/"> / </option>
                        </select>
                    </label>
                </form>
                <input 
                    type = "text"
                    value = {number2}
                    onChange = {this.handleNumberChange2}
                />
                <h3>Resultado: {resultado}</h3>
                <button onClick={this.handleOnClick}>Calcular</button>
            </div>
        )
    }
}
export default Calculator;