import React from 'react';

const footer = (props) => {   
    const root ={
        marginTop: '20px',
    }
    return (
        <footer style={root}>
            &copy; web2 {new Date().getFullYear}
        </footer>
        );
}

export default footer;