import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoList from './container/todolist';
import { List, Form, Footer,Completed,Active  } from './components'
class App extends Component {
  render() {
    return <Router>
        <section>
          <Form />
          <Route exact path="/" component={List} />
          {/* <Route path="/active" component={Active} />
          <Route path="/completed" component={Completed} /> */}

          <Footer />
        </section>
      </Router>;
  }
}

export default App;