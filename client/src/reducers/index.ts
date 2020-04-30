import { combineReducers } from "redux";
import getPosts from "./form";
import getFormStatus from './formStatus'
import getTheme from './theme'
import getPost from './post'

const allReducers = combineReducers({
  getPosts, getFormStatus, getTheme, getPost
});

export default allReducers;
