import React from 'react';
import { submitData, getdata } from '../store/middleware/datamiddleware'
import { connect } from 'react-redux'


class Form extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: '',
            alert: false,
            visible: "none",
            textArea: ''
        }
    }
    handleTyping(event) {
        this.setState({ value: event.target.value });
    }
    handleTextArea(event) {
        this.setState({ textArea: event.target.value });
    }
    handleSubmit(event) {
        event.preventDefault();
        const value = this.state.value
        const Description = this.state.textArea
        this.setState({ value: '' });
        this.setState({ textArea: '' })
        if (this.state.value === ""&&this.state.textArea==="") {
            this.setState({ alert: true, visible: 'block' })
        }
        else {
            this.props.submit(value, Description)
        }

        this.props.getdataa()
    }
    render() {
        console.log("visible", this.state.textArea)
        return (
            <div className="panel-body">
                <form onSubmit={(e) => this.handleSubmit(e)} className="input-group ">
                    <input type="text" className="form-control" autoFocus
                        placeholder="What needs to be done? Search or add..."
                        value={this.state.value}
                        onChange={(e) => this.handleTyping(e)} />
                    <textarea
                        style={{ marginTop: 10, width: 300 }}
                        class="form-control" rows="5" id="comment" placeholder="Enter Description Here..."
                        onChange={(e) => this.handleTextArea(e)}
                    />
                    <span className="input-group-btn">
                        <button className="btn btn-primary" type="submit">
                            <span className="glyphicon glyphicon-plus" aria-hidden="true"></span>
                        </button>
                    </span>
                </form>
                <div className='alert alert-danger' style={{ display: this.state.visible, justifyContent: 'center' }} >
                    <p style={{ textAlign: 'center' }}>please fill form first</p>
                    <button className='btn btn-danger' onClick={() => { this.setState({ alert: false, visible: 'none' }) }} >ok</button>
                </div>
            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        submit: (data, Description) => { dispatch(submitData(data, Description)) },
        getdataa: () => { dispatch(getdata()) }
    })
}
export default connect(null, mapDispatchToProps)(Form)