import React from 'react';
import { Form, List, Footer } from '../components'
import { Link } from 'react-router'
import { connect } from 'react-redux';

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }
// componentDidMount(){
//     this.checkedAll()
// }
   
    render() {
        return (
            <section>
               
                <h1 className="text-center" >To do List</h1>
                <div className="container panel panel-default">
                    <div className="panel-body">
                        <Form />
                        {/* <List /> */}
                        <Footer />
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
export default connect(mapStateToProps,null)(TodoList)