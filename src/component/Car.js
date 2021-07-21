import React from 'react'
import {useGlobalContext} from '../context'
// import carFeatures from '../data'
// import motor from  "../images/6-2-car-png-file.png" 
import Features from './Features'

const Car = () => {
    const {car,image} = useGlobalContext()
    // console.log(car.length)
    return(
        <div>
            {/* image section  */}
        <section className="carPage">
            <img src={ image} alt="car" className="motor"/>
            <p>2019 Benz</p>
            <p>$9000</p>
            <h4>Added Features</h4>
            <p>You can purchase items from the stores</p>
        </section>
            {/* features section  */}
        <section className="addFeatures">
            <h4>Additional Features</h4>
            {car.map((item) => {
            return(
                <div key={item.id}>
                    < Features {...item}/>
                </div>
            )
            })}
            <h4>Total Amount $9000</h4>
        </section>
        </div>
    )
 
}
 
export default Car;