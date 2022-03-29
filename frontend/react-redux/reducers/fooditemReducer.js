const initialData = {
  restaurant: {},
};
const foodItemReducer = (state = initialData, action) => {
  const data = action.payload;

  switch (action.type) {
    case "GET_RESTAURANT":
      const newdata = data.replace(/&quot;/g, '"');
      const finalData = JSON.parse(newdata);
      return {
        ...state,
        restaurant: finalData,
      };
    case "ADD_FOODITEM":
      return {
        ...state,
        restaurant: data,
      };
    default:
      return state;
  }
};

export default foodItemReducer;
