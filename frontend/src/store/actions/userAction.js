import axios from "axios";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_IS_LOGGED_REQUEST,
  USER_IS_LOGGED_SUCCESS,
  USER_IS_LOGGED_FAIL,
} from "../constants/userConstant";

export const register =
  (username, email, password, firstname, lastname) => async (dispatch) => {
    try {
      dispatch({
        type: USER_REGISTER_REQUEST,
      });

      const config = {
        headers: {
          "Content-type": "Application/json",
        },
      };
      //Make Validation
      if (password.length < 5) {
        throw "Password is too weak";
      } else {
        const data = await axios.post(
          "/thot/register",
          { username, email, password, firstname, lastname },
          config
        );

        dispatch({
          type: USER_REGISTER_SUCCESS,
          payload: data,
        });
      }
    } catch (error) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.responseerror.response.data.message
            : error.response,
      });
    }
  };
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-type": "Application/json",
      },
    };

    const data = await axios.post("/thot/login", { email, password }, config);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.responseerror.response.data.message
          : error.response,
    });
  }
};
export const logged = () => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_IS_LOGGED_REQUEST,
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
    const data = await axios.get(`/thot/profile/`, config);

    dispatch({
      type: USER_IS_LOGGED_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: USER_IS_LOGGED_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.responseerror.response.data.message
          : error.response,
    });
  }
};
