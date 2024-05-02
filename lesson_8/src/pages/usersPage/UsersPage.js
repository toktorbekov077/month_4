import React, {useRef} from 'react';

function UsersPage() {
    const blockRef = useRef(null)

    function changeColor () {
        // const block = document.getElementById('block')
        //
        // block.style.backgroundColor = 'black'
        blockRef.current.style.backgroundColor = 'black'
    }
    return (
        <div>
            <div style={{width: '100px', height: '100px', backgroundColor: 'red'}} ref={blockRef}>

            </div>

            <button onClick={changeColor}>change color block</button>
        </div>

    );
}

export default UsersPage;