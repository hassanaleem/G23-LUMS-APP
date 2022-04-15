const initialData = {
  allowed: false,
  user: {},
  message: "",
  queryRun: false,
};

const loginReducer = (state = initialData, action) => {
  const data = action.payload;
  switch (action.type) {
    case "SIGN_IN":
      const newdata = data.replace(/&quot;/g, '"');
      const finalData = JSON.parse(newdata);
      return {
        ...state,
        user: finalData,
        allowed: true,
        queryRun: true,
      };

    case "SIGN_OUT":
      return {
        ...state,
        user: {},
        allowed: false,
        message: "",
        queryRun: false,
      };
    case "SIGN_IN_FAILED":
      return {
        ...state,
        user: {},
        allowed: false,
        message: "Failed",
        queryRun: true,
      };
    case "CLEAR_ALL_STATE":
      return {
        ...state,
        user: {},
        allowed: false,
        message: "",
        queryRun: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
