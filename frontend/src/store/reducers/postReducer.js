import {
  POST_THOUGHT_REQUEST,
  POST_THOUGHT_SUCCESS,
  POST_THOUGHT_FAIL,
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
