const Features = ({id,path,amount}) => {
    return ( 
        <div >
            {/* <h4>Additional Features</h4> */}
            <div key={id} className="carParts">
                <button>Add</button>
                <p>{path}</p>
                <p>(+{amount})</p>
            </div>
            {/* <h4>Total Amount : $9000 </h4> */}
        </div>
     );
}
 
export default Features;