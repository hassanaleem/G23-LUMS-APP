const initialData = {
    message: "",
}

const courseGradeReducer = (state = initialData, action) => {
    const data = action.payload
    switch (action.type) {
        case 'ADD_GRADE':
            return {
                ...state,
                message: "Success",
            }
            
        case "ADD_GRADE_FAILED":
            
            return {
                ...state,
                message: "Failure",
            }

        default:
            return state
    }

}

export default courseGradeReducer