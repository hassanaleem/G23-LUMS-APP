const initialData = {
  allowed: false,
  user: {},
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
      };

    case "SIGN_OUT":
      return {
        ...state,
        user: {},
        allowed: false,
      };
    case "SIGN_IN_FAILED":
      return {
        user: {},
        allowed: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
