import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
    render() {
        const buttonStyle = {
            backgroundColor: 'gray',
            border:'1px solid red'
        }
        return (
            <div className="Home">
                <h1>soy el home</h1> 
                <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>

                <a href="https://www.youtube.com/watch?v=2Zi24wcaWKs">League of legends </a>
                <div>
                    {/* Styles inline */}
                    <button style= {{
                        backgroundColor: 'blue',
                        border:'1px solid black'
                    }}>
                        click
                    </button>
                    {/* Styles objects */}
                    <button style={buttonStyle}>
                        click
                    </button>
                </div>
            </div>
        );
    }
}
export default Home;