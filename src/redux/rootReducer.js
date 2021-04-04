//Import all the reducers Here

import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    //Pass Each Individual Reducers, the ones we import up here:
    //Eg. counter: counterReducer
})

export default rootReducer;