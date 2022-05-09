import React, { Component } from 'react';
import './Animation.css';

class Animation extends Component {
    constructor(props){
        super(props);
        this.state = {
            show: false,
        }
    }


    toggleCollapse = () =>{
        this.setState({
            show : !this.state.show
        })
    }
    
    componentDidUpdate(newProps, newState){
        if(!newState.show){
            document.getElementById('fade').style = 'opacity: 0';
            document.getElementById('fade').style = 'color: yellow';
            document.getElementById('fade').style = 'background:url(https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/McDonald%27s_logo.svg/220px-McDonald%27s_logo.svg.png)';
        }else{
            document.getElementById('fade').style = 'opacity: 1';
        }
    }

    render() {
        return (
            <div className="Animation">
                <button onClick={this.toggleCollapse}>
                    {this.state.show ? 'collapse' : 'Expand'}
                </button>
                <div
                    id='fade'
                    className= {this.state.show? 'transition show ' : 'transition'}
                >
                </div>
            </div>
        );
    }
}

export default Animation;