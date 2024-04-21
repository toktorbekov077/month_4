import React from 'react';

function MainPage () {

    const click = () => {

        console.log("click")
    }

    const sayHello = () => {
        alert("hello")
    }
    const sayGoodbye = () => {
        alert("good bye")
    }

    return (
        <div>
            <h1>Обработчики событий</h1>
            <button onClick={click}>click</button>
            <button onDoubleClick={sayHello}>double click</button>
            <button onContextMenu={sayGoodbye}>context menu</button>
        </div>
    )
}

export default MainPage;