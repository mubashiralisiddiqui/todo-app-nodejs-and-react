import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import datareducer from './reducers/datareducer'
export default createStore(
    combineReducers({
        datareducer
    }), {}, (applyMiddleware(thunk))
)