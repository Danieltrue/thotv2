import {
  POST_THOUGHT_REQUEST,
  POST_THOUGHT_SUCCESS,
  POST_THOUGHT_FAIL,
  GET_ALL_POST_THOUGHT_REQUEST,
  GET_ALL_POST_THOUGHT_SUCCESS,
  GET_ALL_POST_THOUGHT_FAIL,
  LIKE_POST_THOUGHT_REQUEST,
  LIKE_POST_THOUGHT_SUCCESS,
  LIKE_POST_THOUGHT_FAIL,
  GET_USER_THOT_REQUEST,
  GET_USER_THOT_SUCCESS,
  GET_USER_THOT_FAIL,
  DELETE_USER_THOT_REQUEST,
  DELETE_USER_THOT_SUCCESS,
  DELETE_USER_THOT_FAIL,
  GET_SINGLE_THOT_REQUEST,
  GET_SINGLE_THOT_SUCCESS,
  GET_SINGLE_THOT_FAIL,
} from "../constants/postConstant";

export const postThought = (state = {}, action) => {
  switch (action.type) {
    case POST_THOUGHT_REQUEST:
      return { loading: true };
    case POST_THOUGHT_SUCCESS:
      return { loading: false, post: action.payload };
    case POST_THOUGHT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getAllThought = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_POST_THOUGHT_REQUEST:
      return { loading: true };
    case GET_ALL_POST_THOUGHT_SUCCESS:
      return { loading: false, posts: action.payload };
    case GET_ALL_POST_THOUGHT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const likePost = (state = {}, action) => {
  switch (action.type) {
    case LIKE_POST_THOUGHT_REQUEST:
      return { loading: true };
    case LIKE_POST_THOUGHT_SUCCESS:
      return { loading: false, posts: action.payload };
    case LIKE_POST_THOUGHT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getUserThought = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_THOT_REQUEST:
      return { user_thot_loading: true };
    case GET_USER_THOT_SUCCESS:
      return { user_thot_loading: false, userThought: action.payload };
    case GET_USER_THOT_FAIL:
      return { user_thot_loading: false, user_thot_error: action.payload };
    default:
      return state;
  }
};

export const deleteUserThought = (state = {}, action) => {
  switch (action.type) {
    case DELETE_USER_THOT_REQUEST:
      return { delete_thot_loading: true };
    case DELETE_USER_THOT_SUCCESS:
      return { delete_thot_loading: false, delThought: action.payload };
    case DELETE_USER_THOT_FAIL:
      return { delete_thot_loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getSingleThot = (state = {}, action) => {
  switch (action.type) {
    case GET_SINGLE_THOT_REQUEST:
      return { single_thot_loading: true };
    case GET_SINGLE_THOT_SUCCESS:
      return { single_thot_loading: false, singleThought: action.payload };
    case GET_SINGLE_THOT_FAIL:
      return { single_thot_loading: false, single_thot_error: action.payload };
    default:
      return state;
  }
};
