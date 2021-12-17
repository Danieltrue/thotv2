import axios from "axios";
import {
  POST_THOUGHT_REQUEST,
  POST_THOUGHT_SUCCESS,
  POST_THOUGHT_FAIL,
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

      const data = axios.post(
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
