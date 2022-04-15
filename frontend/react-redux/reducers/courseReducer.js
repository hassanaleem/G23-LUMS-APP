const initialData = {
  message: "",
  find: false,
  queryRun: false,
  data: [],
};

const courseReducer = (state = initialData, action) => {
  const data = action.payload;
  switch (action.type) {
    case "ADD_COURSE":
      return {
        ...state,
        message: "Success",
      };

    case "ADD_COURSE_FAIL":
      return {
        ...state,
        message: "Failure",
      };
    case "GET_COURSE":
      const newdata = data.replace(/&quot;/g, '"');
      const finalData = JSON.parse(newdata);
      return {
        ...state,
        find: true,
        queryRun: true,
        data: finalData,
        message: "Success",
      };
    case "GET_COURSE_FAILED":
      return {
        ...state,
        find: false,
        queryRun: true,
        message: "Failure",
      };
    case "GET_ENROLLMENTS":
      const newdata1 = data.replace(/&quot;/g, '"');
      const finalData1 = JSON.parse(newdata1);
      return {
        ...state,

        data: finalData1,
        message: "Success",
      };
    case "GET_ENROLLMENTS_FAILED":
      return {
        ...state,

        message: "Failure",
      };

    case "CLEAR_STATE":
      return {
        ...state,
        find: false,
        queryRun: false,
      };

    case "CLEAR_COURSE_MESSAGE":
      return {
        ...state,
        message: "",
      };

    case "CLEAR_ALL_STATE":
      return{
        ...state,
        message: "",
        find: false,
        queryRun: false,
        data: [],
      };

    default:
      return state;
  }
};

export default courseReducer;
