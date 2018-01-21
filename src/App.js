import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TodoList from './container/todolist';
import { List, Form, Footer } from './components'
class App extends Component {
  render() {
    return (
      <section>
      {/* //   <h1 className="text-center" >To do List</h1>
      //   <div className="container panel panel-default">
      //     <div className="panel-body">
      //       <Form />
      //     </div>
      //   </div> */}
        <Router>

          <Route path="/" component={TodoList} />
          {/* <Route exact path='/' component={List} /> */}

        </Router>
      </section>

    );
  }
}

export default App;
