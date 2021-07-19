import React,{useContext,useReducer} from 'react'
import reducer from './reducer'
import carFeatures from './data'

const AppContext = React.createContext()
// let num = 42

const initialState = {
    loading: false,
    amount:0,
    total:0,
    car: carFeatures,
    image:'https://freepngimg.com/thumb/car/6-2-car-png-file.png'
}

const AppProvider = ({children}) => {
    const[state,dispatch] = useReducer(reducer, initialState)
    return(
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
}

// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export{AppContext,AppProvider}