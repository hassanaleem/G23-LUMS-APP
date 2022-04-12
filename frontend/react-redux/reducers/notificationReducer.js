const initialState = {
    data: [],
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
        };

      case "CLEAR_NOTIFICATIONS":
        return {
          ...state,
          data: [],
        };
      default:
        return state;
    }
  };
  export default notificationReducer;
  