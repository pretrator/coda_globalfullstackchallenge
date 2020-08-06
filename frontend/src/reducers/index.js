import {combineReducers} from 'redux';
import auth from "./auth"
import hackers from "./list"
import admin from "./admin"
export default combineReducers({
    auth:auth,
    hackers:hackers,
    admin:admin
});