import {combineReducers} from 'redux';
import auth from "./auth"
import hackers from "./list"
export default combineReducers({
    auth:auth,
    hackers:hackers,
});