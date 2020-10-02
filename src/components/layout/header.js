import React from 'react'

function Header() {
    return (
      <header>
          <h1 style= {HeaderStyle}>To-Do List</h1>
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

export default Header

