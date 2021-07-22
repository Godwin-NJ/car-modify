import { useGlobalContext } from "../context";

const Features = ({id,path,amount}) => {
    const {addFeature} = useGlobalContext()
    return ( 
        <div >
            {/* <h4>Additional Features</h4> */}
            <div key={id} className="carParts">
                <button onClick={() => addFeature(id)}>Add</button>
                <p>{path}</p>
                <p>(+{amount})</p>
            </div>
            {/* <h4>Total Amount : $9000 </h4> */}
        </div>
     );
}
 
export default Features;