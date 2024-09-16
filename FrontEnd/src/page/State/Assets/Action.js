import * as types from "./ActionTypes";
import api from "@/config/api";

export const getAsset = ({ jwt, assetId }) => async (dispatch) => {
  dispatch({ type: types.GET_ASSET_REQUEST });

  try {
    const response = await api.get(`/api/asset/${assetId}`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: types.GET_ASSET_SUCCESS,
      payload: response.data,
    });
    console.log("Asset Data:", response.data);
  } catch (error) {
    dispatch({
      type: types.GET_ASSET_FAILURE,
      error: error.message,
    });
    console.log("Failed to fetch asset:", error.message);
  }
};

// Get User Assets
export const getUserAssets = ({ jwt }) => async (dispatch) => {
  dispatch({ type: types.GET_USER_ASSETS_REQUEST });

  try {
    const response = await api.get(`/api/asset`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: types.GET_USER_ASSETS_SUCCESS,
      payload: response.data,
    });
    console.log("User Assets:", response.data);
  } catch (error) {
    dispatch({
      type: types.GET_USER_ASSETS_FAILURE,
      error: error.message,
    });
    console.log("Failed to fetch user assets:", error.response.data);
  }
};

// Get Asset Details
export const getAssetDetails = ({ jwt, coinId }) => async (dispatch) => {
  dispatch({ type: types.GET_ASSET_DETAILS_REQUEST });

  try {
    const response = await api.get(`/api/asset/coin/${coinId}/user`, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: types.GET_ASSET_DETAILS_SUCCESS,
      payload: response.data,
    });
    console.log("Asset Details:", response.data);
  } catch (error) {
    dispatch({
      type: types.GET_ASSET_DETAILS_FAILURE,
      error: error.message,
    });
    console.log("Failed to fetch asset details:", error.message);
  }
};
