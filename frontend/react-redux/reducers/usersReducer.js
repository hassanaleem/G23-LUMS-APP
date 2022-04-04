const initialData = {
  find: false,
  user: {},
  queryRun: false,
};

const usersReducer = (state = initialData, action) => {
  const data = action.payload;
  switch (action.type) {
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
    default:
      return state;
  }
};

export default usersReducer;
