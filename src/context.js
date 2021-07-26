import React,{useContext,useReducer} from 'react'
import reducer from './reducer'
import carFeatures from './data'

const AppContext = React.createContext()

// let num = 42

const initialState = {
    loading: false,
    amount:0,       
    price:5300,     
    car: carFeatures,   
    image:'https://freepngimg.com/thumb/car/6-2-car-png-file.png',
    features: []
}


const AppProvider = ({children}) => {
    const[state,dispatch] = useReducer(reducer, initialState)
    
    
    const addFeature = (data) => {
        dispatch({type:'ADD',payload: data})
    }

    const extraFeature = (id) => {
        dispatch({type:'CAR_EXTRA',payload: id})
    }

    return(
        <AppContext.Provider value={{
            ...state,
            addFeature,
            extraFeature
        }}>
            {children}
        </AppContext.Provider>
    )   
}       

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export{AppContext,AppProvider}