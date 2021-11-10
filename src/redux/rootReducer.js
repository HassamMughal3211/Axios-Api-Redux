import {combineReducers} from 'redux';
import GetReducer from './reducer';
// import  GetReducer from './reducer'

var RootReducer = combineReducers({
    Data: GetReducer
})

export default RootReducer;


