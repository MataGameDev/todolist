
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from '../images/logo.svg';

const Header = (props) => {

    const{title,url} = props;
    return (
        <header className="App-header">
            <a href ={url}>
                <img src={logo} className="App-logo" alt="logo" />
            </a>

            <h1>{title}</h1>
        </header>
    );
    
}
Header.PropTypes ={
    title: PropTypes.string.isRequired,
    url: PropTypes.string,
 
}

export default Header;