import React from 'react'

export default function about() {
    return (
        <React.Fragment>
        <h1>About the application</h1>
        <p style={styleText}>This is a simple to-do app made using react-js and jsonplaceholder apis<br/>
           <br/>Author - Apurva Tripathi
        </p>
        </React.Fragment>
    )
}

const styleText ={
    background: '#98FB98',
    width: '300px',
    padding: '50px',
    margin:'auto'
}
