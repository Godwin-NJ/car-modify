const reducer = (state,action) => {
    if(action.type === "ADD"){
        // console.log(state,11)
        // console.log(action.payload,12)
        return {
            ...state,
            car: state.car.filter((carItem) => {
                return(
                    carItem.id !== action.payload.id
                )
            }),
            features:  [...state.features, {...action.payload}],
            price: state.price + action.payload.amount
        }   
    }        
        
    if(action.type === "CAR_EXTRA"){
        return {
            ...state,
            car:  [...state.car, {...action.payload}],
            features: state.features.filter((carPart) => carPart.id !== action.payload.id),
            price: state.price - action.payload.amount,
            
            // car: state.car
        }
    }



    return state
}

export default reducer