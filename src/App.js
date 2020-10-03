import React, { Component } from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';
import Header from './components/layout/header';
import Todos from './components/todos/todos' // import names have to be in capital fonts otherwise they won't work for some reason 
import AddToDo from './components/todos/addToDo'
// import * as uuid from 'uuid'
import About from './components/pages/about'
import axios from 'axios'

class App extends Component{
  state = {
    todos: [
    ]
}

//to-do will be filled with json placeholder api

componentDidMount() {
  axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5').then(res => this.setState({todos: res.data}))
}

//axios requests return a promise
// adding ?_limit=5 to the url limits the responses to just 5 in number

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
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`).then(res => this.setState({
    todos: [...this.state.todos.filter(todo => todo.id !== id)]
  }))
}

addOneToDo = (title) => {
  // const newTodo = {
  //   id: uuid.v4(),
  //   title,
  //   completed: false
  // }

  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  }).then(res => this.setState({ todos: [...this.state.todos, res.data]}))
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
