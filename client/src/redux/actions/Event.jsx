import axios from "axios";

export const createEvent = (formData) => async (dispatch) => {
  try {
    dispatch({
      type: "EventCreateRequest",
    });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `http://localhost:8000/api/v1/event/create-event`,
      formData,
      config
    );
    dispatch({
      type: "EventCreateSuccess",
      payload: data.event,
    });
  } catch (error) {
    dispatch({
      type: "EventCreateFail",
      payload: error.response.data.message,
    });
  }
};
export const getAllEvents = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "GetAllEventsShopRequest",
    });

    const { data } = await axios.get(
      `http://localhost:8000/api/v1/event/get-all-events/${id}`
    );
    dispatch({
      type: "GetAllEventsShopSuccess",
      payload: data.events,
    });
  } catch (error) {
    dispatch({
      type: "GetAllEventsShopFailed",
      payload: false,
    });
  }
};

// DELETE PRODUCT
export const deleteEvent = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DeleteEventRequest",
    });

    const { data } = await axios.delete(
      `http://localhost:8000/api/v1/event/delete-event/${id}`,
      {
        withCredentials: true,
      }
    );

    dispatch({
      type: "DeleteEventSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DeleteEventFailed",
      payload: false,
    });
  }
};
