import React from 'react';
import { submitData,getdata } from '../store/middleware/datamiddleware'
import { connect } from 'react-redux'


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    handleTyping(event) {
        this.setState({ value: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();

        this.setState({ value: '' });
        this.props.submit(this.state.value)
        this.props.getdataa()
    }
    render() {
        return (
            <div className="panel-body">
                <form onSubmit={(e) => this.handleSubmit(e)} className="input-group">
                    <input type="text" className="form-control" autoFocus
                        placeholder="What needs to be done? Search or add..."
                        value={this.state.value}
                        onChange={(e) => this.handleTyping(e)} />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit">
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                        </button>
                    </span>
                </form>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        submit: (data) => { dispatch( submitData(data)) },
        getdataa: () => { dispatch(getdata()) }
    })
}
export default connect(null,mapDispatchToProps)(Form)