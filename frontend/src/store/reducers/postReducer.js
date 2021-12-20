import {
  POST_THOUGHT_REQUEST,
  POST_THOUGHT_SUCCESS,
  POST_THOUGHT_FAIL,
  GET_ALL_POST_THOUGHT_REQUEST,
  GET_ALL_POST_THOUGHT_SUCCESS,
  GET_ALL_POST_THOUGHT_FAIL,
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
