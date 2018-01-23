import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import TodoList from './container/todolist';
import { List, Form, Footer, Completed, Active, Calender } from './components';
import axios from 'axios'
class App extends Component {
  componentWillMount() {
    console.log('didmount ')
    // alert()
    const CALENDAR_ID = 'tb8ckdrm61bdsj6jfm7khob4u5@group.calendar.google.com'
    const API_KEY = 'AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp';
    let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;
    // this.checkedAll()
    axios
      .get(url).then((res) => {
        console.log("response", res)
      })
    // .end((err, resp) => {
    //     console.log("responese", resp)
    //     // if (!err) {
    //     //     const events = []
    //     //     JSON.parse(resp.text).items.map((event) => {
    //     //         events.push({
    //     //             start: event.start.date || event.start.dateTime,
    //     //             end: event.end.date || event.end.dateTime,
    //     //             title: event.summary,
    //     //         })
    //     //     })
    //     //     callback(events)
    //     // }
    // })
  }
  render() {
    return <Router>
      <section>
        <Form />
        <Route exact path="/" component={List} />
        {/* <Route path="/active" component={Active} />
          <Route path="/completed" component={Completed} /> */}

        <Footer />
        <Calender />
      </section>
    </Router>;
  }
}

export default App;