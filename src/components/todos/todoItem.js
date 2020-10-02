import React, { Component } from 'react'

export class TodoItem extends Component {

    setStyleFunc = () => {
        return {
            color: 'black',
            background: '#98FB98',
            padding: '20px',
            textDecoration: this.props.todoItemProp.completed ? 'line-through': 'none',
            marginBottom: '10px',
            marginRight: '500px',
            marginLeft: '500px',
            marginTop: '20px',
            textAlign: 'centre'
        }
    }

    render() {
        const {id, title} = this.props.todoItemProp
        return (
            <div style={this.setStyleFunc()}>
                <input type='checkbox'  onChange={this.props.markComplete.bind(this, id)}/>
                <p>{title}</p>
                <button style={btnStyle} onClick ={this.props.deleteToDo.bind(this, id)}>X</button>
            </div>
        )
    }
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '30%',
    cursor: 'pointer',
}


export default TodoItem
