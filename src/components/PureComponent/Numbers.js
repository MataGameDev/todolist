import React, { Component } from 'react';
import Result from './Result';
import './Numbers.css';
class Numbers extends Component {

    constructor() {
        super();
        this.state = {
            /*establecer la variable de numero para que el usuario los introduzca*/
            numbers: '',
            /* crear el arreglo de resultados de forma vacia para que se vayan agregando ahi mediante Props */
            results: []
        }
    }
    
    handleNumberChange = e => {
        const {target: {value}} = e;

        const numbers = Array.from(value);
        /*la operacion que dara resultado y funionamiento a el programa, se suman los 2 valores y luego el valor de el resultado se guarda y se establece como 
        valor X y el valor que introduzca el usuario sera el valor Y*/
        const result = numbers.reduce((x, y) => Number(x) + Number(y), 0);
        /* se almacenara el resultado en el arreglo */
        this.setState({
            numbers: value,
            results: [...this.state.results, result]
        })
    }

    render() {
        const {results} = this.state;
        return (
            <div className= "Numbers">
                <input
                    type="number"
                    value={this.state.numbers}
                    onChange= {this.handleNumberChange}
                />
                <ul>
                    {
                        /*se imprime el resulado usando /Results y usando la funcion map facilitando su actualizacion continua */
                        results.map((result, k) => (
                            <Result key={k} result={result}/>
                        ))
                    }
                </ul>
            </div>
        );
    }
}

export default Numbers;