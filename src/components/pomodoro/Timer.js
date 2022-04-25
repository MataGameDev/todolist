import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
    constructor(){
        super();

        this.state = {
            alert:{
                type:'',
                message:'',
            },
            time: 0
        };

        this.times = {
            defaultTime: 1500, //25 min
            shortBreak: 300, //5 min
            longBreak: 900, //15 min
        }




    }

    componentDidMount(){
        //inicio por defecto de la pagina Web
        this.setDefaultTime()
    }

    setDefaultTime(){
        this.state({
            time: this.times.defaultTime
        })
    }
    //botones
    setTimeForWork = () =>{
        this.setState({
            alert:{
                type:'work',
                message:'WORKING!!!'
            }
        })
    }
    setTimeForShortBreak = () =>{
        this.setState({
            alert:{
                type:'ShortBreak',
                message:'Taking a Break!!!'
            }
        })
    }
    setTimeForLongBreak = () =>{
        this.setState({
            alert:{
                type:'LongBreak',
                message:'Taking the day off!!!'
            }
        })
    }

    render(){
        const {alert: {message,type}, time} =this.state;
        return(
            <div className="pomodoro">
                <div className = {`alert ${type}`}>
                    {message}
                </div>

                <div className = "timer">
                    el Temporizador muestra el tiempo en Minutos
                    de la forma 00:00
                </div>

                <div className ="types">
                    <button
                        className = "start"
                        onClick = {this.setTimeForWork}
                    >
                        Go to Work
                    </button>
                    <button
                        className = "short"
                        /*onClick = {(correr cuenta regresiva de 5 min) =>}*/
                    >
                        Short Break
                    </button>
                    <button
                        className = "long"
                        /*onClick = {(correr cuenta regresiva de 15 min) =>}*/
                    >
                        Long Break
                    </button>

                </div>


            </div>
        )
    }

    

}

export default Timer;