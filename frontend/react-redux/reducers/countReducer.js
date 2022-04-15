const initialState = {
  count: 0,
  data: ["start"],
};
const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case "COUNTER_CHANGE":
      return {
        ...state,
        count: action.payload,
      };
    default:
      return state;
  }
};
export default countReducer;
