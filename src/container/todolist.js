import React from 'react';
import { Form, List, Footer,Calender } from '../components'
import { Link } from 'react-router'
import { connect } from 'react-redux';
// import { getEvents } from '../components/calender';
import axios from 'axios';
import { calendarFormat } from 'moment';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
    componentWillMount() {
        console.log('didmount ')
        alert()
        // const CALENDAR_ID = 'tb8ckdrm61bdsj6jfm7khob4u5@group.calendar.google.com'
        // const API_KEY = 'AIzaSyAOuDzSlG24RPBn3OKVAyjW3OK_EJhCUbp';
        // let url = `https://www.googleapis.com/calendar/v3/calendars/${CALENDAR_ID}/events?key=${API_KEY}`;
        // // this.checkedAll()
        // axios
        //     .get(url)
        //     .end((err, resp) => {
        //         console.log("responese", resp)
        //         // if (!err) {
        //         //     const events = []
        //         //     JSON.parse(resp.text).items.map((event) => {
        //         //         events.push({
        //         //             start: event.start.date || event.start.dateTime,
        //         //             end: event.end.date || event.end.dateTime,
        //         //             title: event.summary,
        //         //         })
        //         //     })
        //         //     callback(events)
        //         // }
        //     })
    }

    render() {
        return (
            <section>

                <h1 className="text-center" >To do List</h1>
                <div className="container panel panel-default">
                    <div className="panel-body">
                        <Form />
                        <List />
                        <Footer />
                        <Calender/>
                    </div>

                </div>
            </section>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        resdata: state.datareducer.data
    }
}
export default connect(mapStateToProps, null)(TodoList)