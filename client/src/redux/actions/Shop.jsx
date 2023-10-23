import axios from "axios";

export const loadShop = () => async (dispatch) => {
  try {
    dispatch({
      type: "LoadShopRequest",
    });
    const { data } = await axios.get(
      `http://localhost:8000/api/v1/shop/get-shop`,
      {
        withCredentials: true,
      }
    );
    dispatch({
      type: "LoadShopSuccess",
      payload: data.shop,
    });
  } catch (error) {
    dispatch({
      type: "LoadShopFail",
      payload: null,
    });
  }
};
