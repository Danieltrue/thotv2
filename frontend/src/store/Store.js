import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
//
import {
  userRegisterReducer,
  userLoginReducer,
  userLoggedInReducer,
} from "./reducers/userReducer";
import {
  postThought,
  getAllThought,
  likePost,
  getUserThought,
  deleteUserThought,
  getSingleThot,
  checkLikedThought,
} from "./reducers/postReducer";

const reducer = combineReducers({
  userRegister: userRegisterReducer,
  userLogin: userLoginReducer,
  userLoged: userLoggedInReducer,
  postedThought: postThought,
  allThought: getAllThought,
  likedPost: likePost,
  userThought: getUserThought,
  deletedThought: deleteUserThought,
  singleThought: getSingleThot,
  likedThought: checkLikedThought,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const intialState = { userLogin: { userInfo: userInfoFromStorage } };

const middleware = [thunk];
const store = createStore(
  reducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
