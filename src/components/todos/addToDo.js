import React, { Component } from 'react'

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
            <form style={{display: 'flex'}} onSubmit={this.onSubmit}>
                <input type='text' name='title' placeholder='Add todo'
                 value={this.state.title} onChange={this.onChange}>
                 </input>

                <input type='submit' value='submit' className='btn'
                 style={{flex:1}}>
                </input>
            </form>
        )
    }
}

export default addToDo
