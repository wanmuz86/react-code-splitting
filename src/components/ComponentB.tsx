import React from 'react'



const ComponentB = () => {


const handleClick = () => {
    // Dynamic import
    // When the button is clicked, then only load the sum method..
    // After I load the sum file or method,
    // Execute the function
    import('../sum').then(({sum})=>{
        const sumResult = sum(3,5);
        alert(sumResult);
    })

}
  return (
    <div>
        <h2>Component B Loaded</h2>
        <button onClick={handleClick}>Calculate me</button>
        </div>
  )
}

export default ComponentB