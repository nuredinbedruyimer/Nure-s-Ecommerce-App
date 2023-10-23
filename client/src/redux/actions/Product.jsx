import axios from "axios";

export const createProduct = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "ProductCreateRequest",
    });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `http://localhost:8000/api/v1/product/create-product`,
      formData,
      config
    );
    dispatch({
      type: "ProductCreateSuccess",
      payload: data.product,
    });
  } catch (error) {
    dispatch({
      type: "ProductCreateFail",
      payload: error.response.data.message,
    });
  }
};

//  GET ALL PRODUCTS
export const getAllProductsShop = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GetAllProductsShopRequest",
    });

    const { data } = await axios.get(
      `http://localhost:8000/api/v1/product/get-all-products-shop/${id}`
    );
    dispatch({
      type: "GetAllProductsShopSuccess",
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: "GetAllProductsShopFailed",
      payload: false,
    });
  }
};

// DELETE PRODUCT
export const deleteProduct = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteProductRequest",
    });

    const { data } = await axios.delete(
      `http://localhost:8000/api/v1/product/delete-shop-product/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "DeleteProductSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteProductFailed",
      payload: false,
    });
  }
};
