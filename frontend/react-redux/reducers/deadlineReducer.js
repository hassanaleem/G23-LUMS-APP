const initialData = {
  data: [],
  dataSearch: [],
  message: "",
};
const deadlineReducer = (state = initialData, action) => {
  const data = action.payload;
  switch (action.type) {
    case "GET_DEADLINE":
      const newdata = data.replace(/&quot;/g, '"');
      const finalData = JSON.parse(newdata);
      return {
        ...state,
        data: finalData,
        message: "GET DEADLINE FETCHED"
      };

    case "ADD_DEADLINE":
      return {
        ...state,
        message: "Success Add Deadline",
      };

    case "ADD_DEADLINE_FAILED":
      return {
        ...state,
        message: "Failure Add Deadline",
      };

    case "POST_DEADLINE_FAIL":
      return {
        ...state,
        message: "Failure",
      };

    case "SEARCH_DEADLINE":
      let d = data.replace(/&quot;/g, '"');
      let finalD = JSON.parse(d);
      return {
        ...state,
        dataSearch: finalD,
        message: "Fetched",
      };

    case "SEARCH_DEADLINE_FAIL":
      return {
        ...state,
        message: "Failure Search",
      };

    case "UPDATE_DEADLINE":
      return {
        ...state,
        message: "Success Update",
      };

    case "UPDATE_DEADLINE_FAIL":
      return {
        ...state,
        message: "Failure Update",
      };

      case "CLEAR_DEADLINE_MESSAGE":
      return {
        ...state,
        message: "",
      };

      case "CLEAR_ALL_STATE":
      return{
        ...state,
        data: [],
        dataSearch: [],
        message: "",
      };

    default:
      return state;
  }
};

export default deadlineReducer;
