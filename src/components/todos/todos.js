import React, {Component} from 'react'
import TodoItem from './todoItem'
import PropTypes from 'prop-types'

class todos extends Component {
    render() {
            return this.props.todoProps.map((todoVar) => (
                <TodoItem key={todoVar.id} todoItemProp = {todoVar} markComplete = {this.props.markComplete} deleteToDo = {this.props.delToDo}/>
            ));
    }
}

todos.propTypes = {
    todo: PropTypes.array.isRequired,
    markComplete: PropTypes.func.isRequired,
    deleteToDo: PropTypes.func.isRequired
}

export default todos