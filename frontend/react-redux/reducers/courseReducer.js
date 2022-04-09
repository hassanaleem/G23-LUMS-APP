const initialData = {
    message: "",
}

const courseReducer = (state = initialData, action) => {
    const data = action.payload
    switch (action.type) {
        case 'ADD_COURSE':
            return {
                ...state,
                message: "Success",
            }
            
        case "ADD_COURSE_FAIL":
            
            return {
                ...state,
                message: "Failure",
            }

        default:
            return state
    }

}

export default courseReducer