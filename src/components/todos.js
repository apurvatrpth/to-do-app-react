import React, {Component} from 'react'
import TodoItem from './todoItem'
import PropTypes from 'prop-types'

class todos extends Component {
    render() {
            return this.props.todoProps.map((todoVar) => (
                <TodoItem key={todoVar.id} todoItemProp = {todoVar} markComplete = {this.props.markComplete}/>
            ));
    }
}

todos.propTypes = {
    todo: PropTypes.array.isRequired
}

export default todos