const initialState = {
    data: [],
    message: "",
  };

  const notificationReducer = (state = initialState, action) => {
    const data = action.payload;
    switch (action.type) {
      case "GET_NOTIFICATIONS":
        const newdata = data.replace(/&quot;/g, '"');
        const finalData = JSON.parse(newdata);
        return {
          ...state,
          data: finalData,
          message: "fetched"
        };

      case "CLEAR_NOTIFICATIONS":
        return {
          ...state,
          data: [],
        };

      case "CLEAR_NOTIFICATION_MESSAGE":
        return {
          ...state,
          message: "checked",
        };

      case "CLEAR_ALL_STATE":
        return{
          ...state,
          data: [],
          message: "",
        };

      default:
        return state;
    }
  };
  export default notificationReducer;
  