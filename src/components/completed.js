import React, { Component, PropTypes } from 'react';
import axios from 'axios';
import { handleDelete, checkItem, updateItem, getdata } from '../store/middleware/datamiddleware';

import { connect } from 'react-redux';
class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false,
            value: this.props.value.value,
            checked: this.props.value.checked,
            isloading: false
        }

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTyping = this.handleTyping.bind(this);
    }
    handleTyping(event) {
        this.setState({ value: event.target.value });
    }
    handleChecked(state) {
        this.setState({
            checked: !this.state.checked
        })
        this.props.cheked(this.props.value._id, state)
    }
    handleSubmit(event) {
        event.preventDefault();
        // this.props.editItem(this.props.id, this.state.value);
        this.props.update(this.props.value._id, this.state.value)
        this.setState({
            editable: false,
            isloading: true
        })
        this.props.stateofloading(this.state.isloading)
        this.props.getallData()
        setTimeout(() => {
            this.setState({
                isloading: false
            })
        }, 500);

    }

    render() {
        console.log("is cheked", this.state.checked)
        return (
            <li onDoubleClick={() => this.setState({ editable: !this.state.editable })}
                style={this.props.value.checked ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}
                className={this.props.value.checked ? "list-group-item checked" : "list-group-item"}
                index={this.props.index}
            >
                <button className="btn check_btn" type="button"
                    onClick={() => this.handleChecked(this.state.checked)}>
                    <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                </button>
                {this.state.editable ? <form onSubmit={(e) => { this.handleSubmit(e) }}>
                    <input className="editableItem form-control"
                        type="text" autoFocus
                        value={this.state.value}
                        onChange={this.handleTyping}
                        placeholder={this.props.value} /> </form> :
                    <span>{this.props.value.value}</span>}

                {this.state.editable ? "" :
                    <button className="btn delete_btn view " type="button"
                        style={{ float: 'right' }}
                        onClick={() => this.props.delete(this.props.value._id)}>
                        <span className="glyphicon glyphicon-remove" aria-hidden="true"></span>
                    </button>}

            </li>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        delete: (id) => { dispatch(handleDelete(id)) },
        update: (id, data) => { dispatch(updateItem(id, data)) },
        cheked: (id, data) => { dispatch(checkItem(id, data)) },
        getallData: () => { dispatch(getdata()) }
    })
}
export default connect(null, mapDispatchToProps)(Item);