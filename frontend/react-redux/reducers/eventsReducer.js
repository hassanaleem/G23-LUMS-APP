const initialData = {
    data : [],
    message: "",
}

const eventsReducer = (state = initialData, action) => {
    const data = action.payload
    switch (action.type) {
        case 'GET_EVENTS':
            const newdata = data.replace(/&quot;/g, '"')
            const finalData = JSON.parse(newdata)
            console.log("finalData", finalData)
            return {
                ...state,
                data: finalData,
            }
            
        case "POST_EVENT":
            return {
                ...state,
                message: "Success",
            }

        case "POST_EVENT_FAIL":
            return {
                ...state, 
                message: "Failure",
            }

        default:
            return state
    }

}

export default eventsReducer