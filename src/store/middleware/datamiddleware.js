import axios from 'axios';
import { handledata } from '../actions/handledata'
const rooturl = 'https://todoappwithnodeandreact.herokuapp.com/api/'
export const submitData = (data) => {
    console.log(data)
    return dispatch => {
        console.log(data)
        axios.post(`${rooturl}/add`, { value: data })
            .then((res) => {
                console.log("response", res)
                axios.get(rooturl)
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
        axios.get(rooturl)
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
        axios.delete(`${rooturl}/delete/${id}`)
            .then((res) => {
                console.log("response of delete req", res)
                axios.get(rooturl)
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
        axios.put(`${rooturl}/add/${id}`, { checked: data })
            .then((res) => {
                console.log("updated", res)
                //update locally
                axios.get(rooturl)
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
        axios.put(`${rooturl}/add/${id}`, { value: data })
            .then((res) => {
                console.log("updated", res.data)
                axios.get(rooturl)
                // dispatch(handledata.load())
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
export const checkedAll = (data) => {
    return dispatch => {
        data.map((a, i) => {
            console.log('mapdat', a._id)
            axios.put(`${rooturl}/add/${a._id}`, { checked: true })
                .then((res) => {
                    console.log("updated", res.data)
                })
                .catch((err) => {
                    console.log('error', err)
                    axios.get(rooturl)
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
                axios.delete(`${rooturl}/delete/${a._id}`)

                    .then((res) => {
                        console.log("response of delete req", res)
                        axios.get(rooturl)
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

