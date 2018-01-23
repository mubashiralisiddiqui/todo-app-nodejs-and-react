import 'react-big-calendar/lib/css/react-big-calendar.css'
import { getEvents } from './getevent'
import React from 'react'
import { render } from 'react-dom'
import moment from 'moment'

import BigCalendar from 'react-big-calendar'
BigCalendar.momentLocalizer(moment)



// import 'stylecss!react-big-calendar/lib/css/react-big-calendar.css'

export default class Calendar extends React.Component {
    constructor() {
        super()
        this.state = {
            events: []
        }
    }
    componentDidMount() {
        console.log('didmount running ')
        getEvents((events) => {
            this.setState({ events })
        })
    }
    render() {
        return (
            // React Components in JSX look like HTML tags
            <BigCalendar
                style={{ height: '420px',width:500,border:'2px solid black' }}
                events={this.state.events}
            />
        )
    }
}