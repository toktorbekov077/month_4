import React, {useState} from 'react';



function AboutPage() {
    const [count , setCount] = useState(0)
    const onMouseHandle = (event) => {
       if (event.target.style.background === "red"){
           event.target.style.background = "black"
       } else  {
           event.target.style.background = "red"
       }
    }

    const increment = () => {
        setCount( count+1)
    }
    const decrement = () => {
        setCount( count )
    }

    return (

        <div>


            <h1>count</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}> - </button>

        </div>
    );
}

export default AboutPage;
