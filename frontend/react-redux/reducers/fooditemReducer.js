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
    case "GET_ALL_FOOD_ITEMS":
      const newdata1 = data.replace(/&quot;/g, '"');
      const finalData1 = JSON.parse(newdata1);
      return {
        ...state,
        data: finalData1,
      };

    default:
      return state;
  }
};

export default foodItemReducer;
