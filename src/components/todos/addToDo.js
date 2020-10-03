import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class addToDo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addOneToDo(this.state.title)
        this.setState({title: ''})
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <input type='text' name='title' placeholder='Add to-do'
                 value={this.state.title} onChange={this.onChange} className ='addItem'>
                 </input>
                <input type='submit' value='submit' className='btn'>
                </input>
            </form>
        )
    }
}

addToDo.propTypes = {
    addOneToDo: PropTypes.func.isRequired
}

export default addToDo
