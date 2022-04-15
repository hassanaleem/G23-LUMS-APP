const initialData = {
  find: false,
  user: {},
  queryRun: false,
  message: "",
};

const usersReducer = (state = initialData, action) => {
  const data = action.payload;
  switch (action.type) {

    case "ADD_USER":
      return {
        ...state,
        message: "Success",
      };

    case "ADD_USER_FAIL":
      return {
        ...state,
        message: "Failure",
      };
    
    case "FIND_USER":
      const newdata = data.replace(/&quot;/g, '"');
      const finalData = JSON.parse(newdata);
      return {
        ...state,
        find: true,
        queryRun: true,
        user: finalData,
      };
    case "FIND_USER_FAILED":
      return {
        ...state,
        find: false,
        queryRun: true,
        user: {},
      };
    case "CLEAR_STATE":
      return {
        ...state,
        find: false,
        queryRun: false,
        user: {},
      };

     case "CLEAR_USER_MESSAGE":
      return {
        ...state,
        message: "",
      };

    case "CLEAR_ALL_STATE":
      return {
        ...state,
        find: false,
        queryRun: false,
        user: {},
        message: "",
      };

    default:
      return state;
  }
};

export default usersReducer;
