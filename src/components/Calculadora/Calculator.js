import React, { Component } from 'react';
import './Calculator.css';
class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number1: '',number2: '',resultado: '', operacion: ''
        }
    }
    /*
    handleOnChange = e = {
        const {target: {value,name,type}} = e;
        const val = type === 'text' ? Number(value) :true;
        this.setState({
            [name]:val
        })
    }

    handleResult = e =>{
        const{number1,number2,selector} = this.state;
        this.setState({
            result:calculateResult(number1,number2,selector)
        })
    }

    */
    handleOnClick = () => {
        const num1 = this.state.number1;
        const num2 = this.state.number2;
        const operacion = this.state.operacion;
        let resultados;
        if (operacion === '+') {resultados = num1 + num2;} 
        else if (operacion === '-') {resultados = num1 - num2;} 
        else if (operacion === '*') {resultados = num1 * num2;} 
        else if (operacion === '/') {resultados = num1 / num2;}
        this.setState({resultado: resultados.toFixed(2)})
    }
    handleNumberChange1 = e => {
        if (e.keyCode === 13) {e.preventDefault();}
        this.setState({number1: Number(e.target.value)});
    }
    handleNumberChange2 = e => {
        if (e.keyCode === 13) {e.preventDefault();}
        this.setState({number2: Number(e.target.value)});
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
            <div className="Background" >
                <input className="Input"
                    type = "text"
                    value = {number1}
                    onChange = {this.handleNumberChange1}
                />
                <form>
                    <label className="Label">
                        <select value ={operacion} onChange={this.handleChangeOperacion}>
                            <option value="void">↓</option>
                            <option value = "+"> + </option>
                            <option value = "-"> - </option>
                            <option value = "*"> x </option>
                            <option value = "/"> / </option>
                        </select>
                    </label>
                </form>
                <input className="Input2"
                    type = "text"
                    value = {number2}
                    onChange = {this.handleNumberChange2}
                />
                <div>
                    <p className="Resultados">Resultado: {resultado}</p>
                    <button onClick={this.handleOnClick} className="Resultado">Calcular</button>
                </div>
            </div>
        )
    }
}
export default Calculator;
