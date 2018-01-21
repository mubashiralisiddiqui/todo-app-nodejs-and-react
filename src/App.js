import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import TodoList from './container/todolist';
import { List } from './components'
class App extends Component {
  render() {
    return (

      <Router>
        <Route path="/" component={TodoList} />
        {/* <Route exact path='/'component={List}/> */}
      </Router>

    );
  }
}

export default App;
