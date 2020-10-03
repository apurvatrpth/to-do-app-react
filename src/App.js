import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/layout/header';
import Todos from './components/todos/todos' // import names have to be in capital fonts otherwise they won't work for some reason 
import AddToDo from './components/todos/addToDo'
import * as uuid from 'uuid'
import About from './components/pages/about'

class App extends Component{
  state = {
    todos: [
        {
            id: uuid.v4(),
            title: "Take out the trash",
            completed: false
        },
        {
            id: uuid.v4(),
            title: "Have lunch",
            completed: false
        },
        {
            id: uuid.v4(),
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

deleteToDo = (id) => {
  this.setState({
    todos: [...this.state.todos.filter(todo => todo.id !== id)]
  })
}

addOneToDo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false
  }
  this.setState({ todos: [...this.state.todos, newTodo]})
}

render() {
  return (
    <Router>
      <div className="App">
      <div className='container'>
      <Header />
      <Route exact path='/' render={propp => (
        <React.Fragment>
            <AddToDo addOneToDo={this.addOneToDo}/>
            <Todos todoProps  = {this.state.todos} markComplete={this.markComplete} delToDo = {this.deleteToDo}/>
        </React.Fragment>
      )}>
      </Route>
      <Route path='/about' component ={About}>
      </Route>
      </div>
      </div>
    </Router>
  );
}
  //todoProps are props for Todos component, they can be accessed in todos.js as well
}

export default App;
