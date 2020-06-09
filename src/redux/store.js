import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";

import logReducer from "redux/log/logReducer";
import userReducer from "redux/user/userReducer";
// import postsReducer from "redux/posts/postsReducer";
// import otherUserReducer from "redux/other_user/otherUserReducer";



const rootReducer = combineReducers({
  log: logReducer,
  user: userReducer,
  // posts: postsReducer,
  // other_user_data: otherUserReducer
})

const store = createStore(
  rootReducer,
  compose(applyMiddleware(thunkMiddleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
)
export default store;