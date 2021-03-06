const initialData = {
  message: "",
  data: [],
};

const courseGradeReducer = (state = initialData, action) => {
  const data = action.payload;
  switch (action.type) {
    case "ADD_GRADE":
      return {
        ...state,
        message: "Success",
      };

    case "ADD_GRADE_FAILED":
      return {
        ...state,
        message: "Failure",
      };
    case "GET_GRADE":
      const newdata1 = data.replace(/&quot;/g, '"');
      const finalData1 = JSON.parse(newdata1);
      return {
        ...state,
        message: "Success",
        data: finalData1,
      };

    case "CLEAR_COURSEGRADE_MESSAGE":
      return {
        ...state,
        message: "",
      };

    case "CLEAR_ALL_STATE":
      return{
        ...state,
        message: "",
        data: [],
      };

    default:
      return state;
  }
};

export default courseGradeReducer;
