import React from 'react'
import {Link} from 'react-router-dom'

function Header() {
    return (
      <header>
          <h1 style= {HeaderStyle}>To-Do List</h1>
          <Link style ={linkStyle} to='/'>Home</Link> | <Link style ={linkStyle} to='/about'>About</Link>
      </header>
    )
}

const HeaderStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
    marginBottom: '10px',
    marginRight: '500px',
    marginLeft: '500px',
    marginTop: '20px',
}

const linkStyle = {
    color: 'black'
}

export default Header

