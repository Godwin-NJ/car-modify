import React,{useContext} from 'react'
import {useGlobalContext} from '../context'
const Car = () => {
    const {carFeatures} = useGlobalContext()
    return ( 
        <>
        <p>Car</p>
        
        </>
     );
}
 
export default Car;