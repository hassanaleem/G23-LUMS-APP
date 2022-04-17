const initialData = {
  restaurant: [],
  find: false,
  queryRun: false,
  message: "",
};
const foodItemReducer = (state = initialData, action) => {
  const data = action.payload;

  switch (action.type) {
    case "GET_RESTAURANT":
      const newdata = data.replace(/&quot;/g, '"');
      const finalData = JSON.parse(newdata);
      return {
        ...state,
        find: true,
        queryRun: true,
        restaurant: finalData,
      };
    case "ADD_FOOD_ITEM":
      return {
        ...state,
        restaurant: data,
        message: "Success",
      };

    case "ADD_FOOD_ITEM_FAIL":
      return {
        ...state,
        message: "Failure",
      };
    case "GET_ALL_FOOD_ITEMS":
      const newdata1 = data.replace(/&quot;/g, '"');
      const finalData1 = JSON.parse(newdata1);
      return {
        ...state,
        find: true,
        queryRun: true,
        restaurant: finalData1,
      };

    case "CLEAR_STATE":
      return {
        ...state,
        find: false,
        queryRun: false,
      };

    case "CLEAR_ALL_STATE":
      return {
        ...state,
        restaurant: [],
        find: false,
        queryRun: false,
        message: "",
      };

    case "CLEAR_FOOD_MESSAGE":
      return {
        ...state,
        message: "",
      };
    case "UPDATE_FOOD_ITEM":
      return {
        ...state,
        message: "Success updating",
      };

    default:
      return state;
  }
};

export default foodItemReducer;
