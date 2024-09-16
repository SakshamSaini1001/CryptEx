import * as types from "./ActionTypes";

const initialState = {
  assets: null, 
  userAssets: [], 
  assetDetails: null, 
  loading: false,
  error: null,
};

const assetReducer = (state = initialState, action) => {
  switch (action.type) {

    case types.GET_ASSET_REQUEST:
    case types.GET_USER_ASSETS_REQUEST:
    case types.GET_ASSET_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case types.GET_ASSET_SUCCESS:
      return {
        ...state,
        assets: action.payload, 
        loading: false,
        error: null,
      };

    case types.GET_USER_ASSETS_SUCCESS:
      return {
        ...state,
        userAssets: action.payload, 
        loading: false,
        error: null,
      };

    case types.GET_ASSET_DETAILS_SUCCESS:
      return {
        ...state,
        assetDetails: action.payload, 
        loading: false,
        error: null,
      };

    case types.GET_ASSET_FAILURE:
    case types.GET_USER_ASSETS_FAILURE:
    case types.GET_ASSET_DETAILS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export default assetReducer;
