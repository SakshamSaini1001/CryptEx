import api from "../../../config/api";
import * as types from "./ActionType";

export const getUserWatchlist = (jwt) => async (dispatch) => {
  dispatch({ type: types.GET_USER_WATCHLIST_REQUEST });

  try {
    const response = await api.get("/api/watchlist/user", {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: types.GET_USER_WATCHLIST_SUCCESS,
      payload: response.data,
    });
    console.log("User Watchlist:", response.data);
  } catch (error) {
    dispatch({
      type: types.GET_USER_WATCHLIST_FAILURE,
      error: error.message,
    });
    console.log("Failed to fetch watchlist:", error.message);
  }
};

// Action to add a coin to the user's watchlist
export const addCoinToWatchlist = ({ jwt, coinId }) => async (dispatch) => {
  dispatch({ type: types.ADD_COIN_TO_WATCHLIST_REQUEST });

  try {
    const response = await api.patch(
      `/api/watchlist/add/coin/${coinId}`,[],
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );

    dispatch({
      type: types.ADD_COIN_TO_WATCHLIST_SUCCESS,
      payload: response.data,
    });
    console.log("Coin added to watchlist:", response.data);
  } catch (error) {
    dispatch({
      type: types.ADD_COIN_TO_WATCHLIST_FAILURE,
      error: error.message,
    });
    console.log("Failed to add coin to watchlist:", error.response.data);
  }
};
