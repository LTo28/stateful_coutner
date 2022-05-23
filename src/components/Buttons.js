
const Buttons = () => {
    const incrementClick = () => {
        console.log("Increment")}
    
        const decrementClick = () => {
        console.log("Decrement")
    }
    return(
        <div>
            <button onClick={incrementClick}>Increment</button>
            <button onClick={decrementClick}>Decrement</button>
        </div>
        
    )
}

export default Buttons