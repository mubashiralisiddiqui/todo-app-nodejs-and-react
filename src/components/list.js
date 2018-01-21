import React from 'react';
import { connect, connectAdvanced } from 'react-redux';
import { getdata, submitData } from '../store/middleware/datamiddleware';
import Item from './item'
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            editable: false
        }

    }
    componentDidMount() {

        this.props.getdataa()
    }

    render() {
        console.log("state of response", this.props.resdata)
        return (
            <ul className="list-group items_list">
                {this.props.resdata ? this.props.resdata.map((a, i) => {
                    return (
                        <div key={i}>
                            <Item value={a} index={i}/>
                        </div>
                    )
                }) : <div className="alert alert-danger searchNoResult">
                        Type the text and press <b>"Enter"</b> to add item.
                </div>
                }
               
            </ul>
        )
    }
}
const mapDispatchToProps = (dispatch) => {
    return ({
        getdataa: () => { dispatch(getdata()) }
    })
}
const mapStateToProps = (state) => {
    return {
        resdata: state.datareducer.data
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(List)