const initialData = {
  msg: "",
  data: [],
  queryRun: false,
};

const postReducer = (state = initialData, action) => {
  const data = action.payload;
  switch (action.type) {
    case "ADD_POST":
      return {
        ...state,
        msg: "SUCCESS",
      };
    case "DELETE_POST":
      return {
        ...state,
        msg: "SUCCESS",
      };
    case "GET_ALL_POSTS":
      let finalData = data.replace(/&quot;/g, '"');
      finalData = JSON.parse(finalData);
      return {
        ...state,
        data: finalData,
        queryRun: true,
        msg: "FETCHED",
      };
    case "LIKE_POST":
      return {
        ...state,
        msg: "SUCCESS",
      };
    case "UNLIKE_POST":
      return {
        ...state,
        msg: "SUCCESS",
      };

    default:
      return state;
  }
};

export default postReducer;
