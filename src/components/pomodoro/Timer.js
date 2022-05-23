import React, { Component } from 'react';
import './Timer.css'

class Timer extends Component {
  
    constructor() {
        super();

        this.state ={
            alert:{
                type:'',
                message:'',
                
            },
            time: 0,
            pauseTo: false,
            ShowOnButtons: false
        };

        this.times = {
            defaultTime: 1500, //25min
            shortBreak: 300, //5min
            longBreak: 900, //15min
        }
    }

    componentDidMount(){
        //Establece tiempo por defecto cuando el componente sea montado
        this.setDefaultTime()
    }

    setDefaultTime(){
        this.setState({
            time: this.times.defaultTime
        })
    }

    //Butons
    setTimeForWord = ()=>{
        this.setState({
            alert:{
                type: 'work',
                message: 'Go To Work'
            }
        })    

        this.setTime(this.times.defaultTime);
    }
    
    setTimeForShort = ()=>{
        this.setState({
            alert:{
                type: 'shortBreak',
                message: 'Take a Short Break'
            }
        })    
        this.setTime(this.times.shortBreak);
    }

    setTimeForLong = ()=>{
        this.setState({
            alert:{
                type: 'longBreak',
                message: 'Take a Lonk Break'
            }
        })   
        this.setTime(this.times.longBreak); 
    }

    setTime =(newTime) =>{
        this.setState({
            ShowOnButtons: true,
        })
        this.restartInterval();
               this.setState({
            time: newTime
        })
        
    }

    countDown = ( )=>{
        let pau = this.state.pauseTo;
        let n;
        if (pau === true){
            n = 0;
        }
        else {
            n = 1;
        }
        if(this.state.time === 0){
            this.setState({
                alert: {
                    type: 'Beep',
                    message: 'Beeeeeeeeeeep',
                }
            })
        }
        else{
            this.setState({
                time : this.state.time -n
            });
        }
    }

    restartInterval = () =>{
        clearInterval(this.interval);
        this.interval = setInterval(this.countDown, 1000);

    }

    displayTimer(Time) {
        let minute = Math.floor((Time / 60) % 60);
        minute = (minute < 10)? '0' + minute : minute;
        let second = Time % 60;
        second = (second < 10)? '0' + second : second;
        return `${minute}:${second}` 

    
    }

    pausar = () =>{
      let pau = this.state.pauseTo;

      pau = !pau;

      this.setState({
        pauseTo: pau
      })
    }

    detener = () =>{
         
        this.setTime(this.times.defaultTime);
        this.setState({
            ShowOnButtons: false,
            alert:{
                type: '',
                message: ''
            }
        })  
        clearInterval(this.interval);
        
    }
    
    render() {

        const {alert: {message, type}, time, pauseTo, ShowOnButtons} = this.state;

        return (
        <div className="Pomodoro">
            <div className={`alert ${type}`}>
                {message}
            </div>

            <div className="timer">
                {this.displayTimer(time)}
            </div>

            <div className="types">
                <button className="start"
                        onClick= {this.setTimeForWord}
                >
                    Go To Work
                </button> 
                <button className="short"
                        onClick= {this.setTimeForShort}
                >
                    Take a Short Break
                </button>      
                <button className="long"
                        onClick= {this.setTimeForLong}
                >
                    Take a Lonk Break
                </button>     
                <br/>
                <div className= {ShowOnButtons ? 'Show': 'Hidden'}>
                    <button className = 'pause'
                    onClick = {this.pausar}
                    >
                        <i className={pauseTo ? 'fa fa-play': 'fa fa-pause'}/>
                    </button>
                    
                    <button className ="Stop"
                    onClick= {this.detener}
                    >
                        <i className = 'fa fa-stop'/>
                    </button>
                </div>
            </div>
        </div>
        )
    }
}

export default Timer;