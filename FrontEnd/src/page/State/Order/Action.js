import * as types from "./ActionType";
import api from "@/config/api";

export const payOrder = ({ jwt, orderData }) => async (dispatch) => {
  dispatch({ type: types.PAY_ORDER_REQUEST });

  try {
    const response = await api.post(`/api/orders/pay`, orderData, {
      headers: {
        Authorization: `Bearer ${jwt}`,
      },
    });

    dispatch({
      type: types.PAY_ORDER_SUCCESS,
      payload: response.data,
    });
    console.log("Order Payment Successful:", response.data);
  } catch (error) {
    dispatch({
      type: types.PAY_ORDER_FAILURE,
      error: error.message,
    });
    console.log("Order Payment Failed:", error.response.data);
  }
};

export const getOrder = ({ jwt, orderId }) => async (dispatch) => {
    dispatch({ type: types.GET_ORDER_REQUEST });
  
    try {
      const response = await api.get(`/api/orders/${orderId}`, {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      });
  
      dispatch({
        type: types.GET_ORDER_SUCCESS,
        payload: response.data,
      });
      console.log("Order Details:", response.data);
    } catch (error) {
      dispatch({
        type: types.GET_ORDER_FAILURE,
        error: error.message,
      });
      console.log("Failed to fetch order details:", error.message);
    }
  };

  export const getAllOrders = ({ jwt,orderType,assetSymbol }) => async (dispatch) => {
    dispatch({ type: types.GET_ALL_ORDERS_REQUEST });
  
    try {
      const response = await api.get("/api/orders", {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },params:{
            order_type:orderType,
            asset_symbol:assetSymbol
        }
      });
  
      dispatch({
        type: types.GET_ALL_ORDERS_SUCCESS,
        payload: response.data,
      });
      console.log("All Orders:", response.data);
    } catch (error) {
      dispatch({
        type: types.GET_ALL_ORDERS_FAILURE,
        error: error.message,
      });
      console.log("Failed to fetch all orders:", error.message);
    }
  };