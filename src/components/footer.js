import React from 'react';
import { connect } from 'react-redux';
import { checkedAll, deleteChecked } from '../store/middleware/datamiddleware';
import {Link}from 'react-router-dom'
class Footer extends React.Component {

    checkedAll() {
        let allData = this.props.resdata
        this.props.getalldata(allData)
    }
    deleteMarked() {
        let allData = this.props.resdata
        this.props.deleteChecked(allData)
    }

    render() {
        return (
            <div className="panel-footer" >
                <div className="left_count" style={{ float: 'left' }}>
                    <span className="label label-default"> item left</span>
                </div>
                <div style={{ justifyContent: 'center', display: 'flex' }}>
                    <div className="btn-group" role="group">
                    <Link to="/" className={this.props.active==="all" ? "btn btn-primary": "btn btn-default"}>All</Link>
                    <Link to="/active" className={this.props.active==="active" ? "btn btn-primary": "btn btn-default"}>Active</Link>
                    <Link to="/completed" className={this.props.active==="completed" ? "btn btn-primary": "btn btn-default"}>Completed</Link>
                    </div>

                </div>
                <div className="clear_completed" style={{ float: 'right', marginTop: -35, justifyContent: 'center' }}>
                    <div className="btn-group" role="group">
                        <button onClick={() => { this.checkedAll() }} type="button" className="btn btn-success">
                            <span className="glyphicon glyphicon-ok" aria-hidden="true"></span>
                        </button>
                        <button onClick={() => { this.deleteMarked() }} type="button" className="btn btn-danger">
                            <span className="glyphicon glyphicon-trash" aria-hidden="true"></span>
                        </button>
                    </div>
                </div>

            </div>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        getalldata: (data) => { dispatch(checkedAll(data)) },
        deleteChecked: (data) => { dispatch(deleteChecked(data)) }
    })
}
const mapStateToProps = (state) => {
    return {
        resdata: state.datareducer.data
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Footer);