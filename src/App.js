import React, { Component } from 'react';
import './App.css';
import Todos from './components/todos' // import names have to be in capital fonts otherwise they won't work for some reason 

class App extends Component{
  state = {
    todos: [
        {
            id: 1,
            title: "Take out the trash",
            completed: false
        },
        {
            id: 2,
            title: "Have lunch",
            completed: false
        },
        {
            id: 3,
            title: "Sleep",
            completed: false
        }
    ]
}

markComplete = (id) => {
  this.setState({
    todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo
    })
  })
}

render() {
  return (
    <div className="App">
      <h1 style= {{fontFamily: 'Courier New', color: '#008080'}}>To-Do List</h1>
      <Todos todoProps  = {this.state.todos} markComplete={this.markComplete}/>
    </div>
  );
}
  //todoProps are props for Todos component, they can be accessed in todos.js as well
}

export default App;
