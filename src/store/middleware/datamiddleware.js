import axios from 'axios';
import { handledata } from '../actions/handledata'

export const submitData = (data) => {
    console.log(data)
    return dispatch => {
        console.log(data)
        axios.post('http://localhost:4000/api/add', { value: data })
            .then((res) => {
                console.log("response", res)
                axios.get('http://localhost:4000/api/')
                    .then((res) => {
                        console.log("response of get req", res.data.data)
                        dispatch(handledata.getdata(res.data.data))
                    })
                    .catch((err) => {
                        console.log("error", err)

                    })
            })
            .catch((err) => {
                console.log("error", err)
            })

    }
}
export const getdata = () => {
    return dispatch => {
        axios.get('http://localhost:4000/api/')
            .then((res) => {
                console.log("response of get req", res.data.data)
                dispatch(handledata.getdata(res.data.data))
            })
            .catch((err) => {
                console.log("error", err)

            })
    }
}
export const handleDelete = (id) => {
    console.log(id)
    return dispatch => {
        axios.delete(`http://localhost:4000/api/delete/${id}`)
            .then((res) => {
                console.log("response of delete req", res)
                axios.get('http://localhost:4000/api/')
                    .then((res) => {
                        console.log("response of get req", res.data.data)
                        dispatch(handledata.getdata(res.data.data))
                    })
                    .catch((err) => {
                        console.log("error", err)

                    })
            })
            .catch((err) => {
                console.log("error", err)
            })
    }
}

export const checkItem = (id, data) => {
    console.log("cheked id and ischekd", id, data)
    return dispatch => {
        axios.put(`http://localhost:4000/api/add/${id}`, { checked: data })
            .then((res) => {
                console.log("updated", res)
                //update locally
                axios.get('http://localhost:4000/api/')
                    .then((res) => {
                        console.log("response of get req", res.data.data)
                        dispatch(handledata.getdata(res.data.data))
                    })
                    .catch((err) => {
                        console.log("error", err)

                    })
            })
            .catch((err) => {
                console.log('error', err)
            })

    }
}
export const updateItem = (id, data) => {
    console.log("id and data", data)
    return dispatch => {
        axios.put(`http://localhost:4000/api/add/${id}`, { value: data })
            .then((res) => {
                console.log("updated", res.data)
            })
            .catch((err) => {
                console.log('error', err)
            })
        //update locally
        axios.get('http://localhost:4000/api/')
            .then((res) => {
                console.log("response of get req", res.data.data)
                dispatch(handledata.getdata(res.data.data))
            })
            .catch((err) => {
                console.log("error", err)

            })
    }
}
export const checkedAll = (data) => {
    return dispatch => {
        data.map((a, i) => {
            console.log('mapdat', a._id)
            axios.put(`http://localhost:4000/api/add/${a._id}`, { checked: true })
                .then((res) => {
                    console.log("updated", res.data)
                })
                .catch((err) => {
                    console.log('error', err)
                    axios.get('http://localhost:4000/api/')
                        .then((res) => {
                            console.log("response of get req", res.data.data)
                            dispatch(handledata.getdata(res.data.data))
                        })
                        .catch((err) => {
                            console.log("error", err)
                        })
                })
        })

        console.log('chekc', data)
    }
}

export const deleteChecked = (data) => {
    return dispatch => {
        console.log('deleted checked', data)
        data.map((a, i) => {
            if (a.checked == true) {
                axios.delete(`http://localhost:4000/api/delete/${a._id}`)
                    .then((res) => {
                        console.log("response of delete req", res)
                        axios.get('http://localhost:4000/api/')
                            .then((res) => {
                                console.log("response of get req", res.data.data)
                                dispatch(handledata.getdata(res.data.data))
                            })
                            .catch((err) => {
                                console.log("error", err)

                            })
                    })
                    .catch((err) => {
                        console.log("error", err)
                    })

            }
        })
        // for (var i = 0; i <= data.length; i++) {
        //    if(data[i].checked===false){
        //   console.log('chekc')
        //    }
        // }
    }
}

