import React from 'react'
import {useGlobalContext} from '../context'
// import carFeatures from '../data'
// import motor from  "../images/6-2-car-png-file.png" 
import Features from './Features'

const Car = () => {
    const {car,image,price, extraFeature,features} = useGlobalContext()
    console.log(features)
    // console.log(car.length)
    return(
        <div>
            {/* image section  */}
        <section className="carPage">
            <img src={ image} alt="car" className="motor"/>
            <p>2019 Benz</p>
            <p>${price}</p>
            <h4>Added Features</h4>
                {
                    features.length ? (
                        <ol type="1">
                            {
                            features.map((item) => {
                                console.log(item,3)
                                return(
                                    <li key={item.id}>
                                    <button onClick={() => extraFeature(item)}>X</button>
                                    {item.path}
                                    </li>
                                )
                            })
                            }
                        </ol>
                    ):
                 <p>You can purchase items from the stores</p>
                }
          
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
            <h4>Total Amount ${price}</h4>
        </section>
        </div>
    )
 
}
 
export default Car;