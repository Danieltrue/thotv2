import axios from "axios";
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
} from "../constants/postConstant";

export const postThought =
  (thought, category, user) => async (dispatch, getState) => {
    try {
      dispatch({
        type: POST_THOUGHT_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const user = userInfo.data;

      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${userInfo.data.token}`,
        },
      };

      const data = await axios.post(
        "/thot/create-post",
        { thought, category, user },
        config
      );

      dispatch({
        type: POST_THOUGHT_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: POST_THOUGHT_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.responseerror.response.data.message
            : error.response,
      });
    }
  };

export const getAllThought = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_ALL_POST_THOUGHT_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };

    const data = await axios.get("/thot/post/", config);

    dispatch({
      type: GET_ALL_POST_THOUGHT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_ALL_POST_THOUGHT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.responseerror.response.data.message
          : error.response,
    });
  }
};

export const likepost = (postId) => async (dispatch, getState) => {
  try {
    dispatch({
      type: LIKE_POST_THOUGHT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };
    const data = await axios.put(
      `/thot/post/like/${userInfo.data.id}?postid=${postId}`,
      {},
      config
    );

    dispatch({
      type: LIKE_POST_THOUGHT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: LIKE_POST_THOUGHT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.responseerror.response.data.message
          : error.response,
    });
  }
};

export const getUserThought = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: GET_USER_THOT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };
    const data = await axios.get(`/thot/post/${id}/thot`, config);

    dispatch({
      type: GET_USER_THOT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_THOT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.responseerror.response.data.message
          : error.response,
    });
  }
};

export const deleteUserThought = (id) => async (dispatch, getState) => {
  try {
    dispatch({
      type: DELETE_USER_THOT_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${userInfo.data.token}`,
      },
    };
    const data = await axios.delete(`/thot/post/${id}/delete`, config);

    dispatch({
      type: DELETE_USER_THOT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: DELETE_USER_THOT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.responseerror.response.data.message
          : error.response,
    });
  }
};
