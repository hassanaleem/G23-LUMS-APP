const initialData = {
    allowed: false,
    user: {}
}

const loginReducer = (state = initialData, action) => {
    const data = action.payload
    switch (action.type) {
        case 'SIGN_IN':
            console.log("data received", data.data)
            const newdata = data.data.replace(/&quot;/g, '"')
            const finalData = JSON.parse(newdata)
            console.log(finalData.blocked, "LOK")

            return {
                ...state,
                user: finalData,

                allowed: true,
            }
        case "SIGN_OUT":
            return {
                ...state,
                user: {},
                allowed: false
            }
        case 'INCORRECT_CREDENTIALS':
            return {
                user: {},
                allowed: false,
            }
        default:
            return state
    }

}

export default loginReducer