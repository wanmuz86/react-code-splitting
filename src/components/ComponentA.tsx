

const ComponentA = () => {
    // throw new Error('Something is wrong with this page ') // to simulate the error
    const items = Array.from({ length: 1000 }, (_, index) => index + 1);
    return (
        <div>
            <h1>Component A loaded</h1>
            {/* <p>{
                items.map(val => <span key={val}>{val}, </span>)}</p> */}
        </div>
    )
}

export default ComponentA