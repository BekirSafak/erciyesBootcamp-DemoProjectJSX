export const initialActivityState = {
    activities: [],
}

const activityReducer = (state, action) => {
    switch (action.type) {
        case "set":
            return {
                ...state,
                activities: action.orderLoad
            }
    }
}
export default activityReducer
