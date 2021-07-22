const reducer = (state,action) => {
    if(action.type === "ADD"){
        return {
            ...state,
            car: state.car.filter((carItem) => {
                return(
                    carItem.id !== action.payload
                )
            }),
            features: [...state.features,action.payload],
            amount: state.amount + action.payload
        }
    }
        
    if(action.type === "CAR_EXTRA"){
        return {
            ...state,
            features: state.features.filter((carPart) => carPart.id !== action.payload)

        }
    }



    return state
}

export default reducer