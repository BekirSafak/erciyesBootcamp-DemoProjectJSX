import { createContext, useReducer } from "react"
import activityReducer, { initialActivityState } from './reducer/activitiesReducer'

export const ActivitiesContext = createContext()

export const ActivitiesProvider = ({ children }) => {
    const [activityState, dispatch] = useReducer(activityReducer, initialActivityState);

    const addToOrders = (activity) => {
        var currentActivities = activityState.activities;

        const isActivities = currentActivities.find((item) => item.id === activity.id);

        if (!isActivities) {
            currentActivities.push({ ...activity, quantity: 1 });
        } else {
            currentActivities = currentActivities.map((item) => {
                if (item.id === activity.id) {
                    return {
                        ...item,
                        quantity: Number(item.quantity) + 1
                    }
                }

                return item;
            });
        }

        dispatch({
            type: "set",
            orderLoad: currentActivities
        });
    }

    const changeActivityQuantity = ({ id, quantity }) => {
        var currentActivities = activityState.activities;

        const newActivities = currentActivities.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    quantity: Number(quantity)
                }
            }

            return item;
        });

        dispatch({
            type: "set",
            orderLoad: newActivities
        })

    }

    const removeToOrder = (id) => {
        const updatedOrder = activityState.activities.filter((currentActivity) => currentActivity.id !== id)

        dispatch({
            type: "set",
            orderLoad: updatedOrder
        })
    }

    const value = {
        activities: activityState.activities,
        addToOrders,
        removeToOrder,
        changeActivityQuantity
    }

    return <ActivitiesContext.Provider value={value}>
        {children}
    </ActivitiesContext.Provider>
}