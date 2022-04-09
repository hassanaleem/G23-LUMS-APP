const initialData = {
  data: [],
  message: "",
};
const deadlineReducer = (state = initialData, action) => {
  const data = action.payload;
  switch (action.type) {
    case "GET_DEADLINE":
      console.log(data)
      const newdata = data.replace(/&quot;/g, '"');
      const finalData = JSON.parse(newdata);
      console.log("finalData", finalData);
      return {
        ...state,
        data: finalData,
      };

    case "ADD_DEADLINE":
      return {
        ...state,
        message: "Success",
      };

    case "POST_DEADLINE_FAIL":
      return {
        ...state,
        message: "Failure",
      };

    default:
      return state;
  }
};

export default deadlineReducer;
