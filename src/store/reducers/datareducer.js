
import { handledata } from '../actions/handledata';

const initialState = {
    data: []
}

export default function (state = initialState, actions) {
    console.log('action payload', actions.payload)
    switch (actions.type) {
        case handledata.Datasend:
            return { ...state }
            break;
        case handledata.GETDATA:
            return { ...state, data: actions.payload }
            break;
        case handledata.UPDATEDATA:
            return { ...state, data: actions.payload }
        default:
            return state
    }

}