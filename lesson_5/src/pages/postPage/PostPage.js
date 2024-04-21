import React from 'react';

function PostPage(props) {

    const changeInput = (event) => {
        console.dir(event.target.value)
        if (event.target.type === 'checkbox' ){
            console.log(event.target.checked)
        } else {
            console.log(event.target.value)
        }
    }

    const blurInput = (event) => {
        console.log(event.target.value)
    }

    const submit = (event) => {
        event.preventDefault()
        console.log("data send")
    }

    const reset = (event) => {
        event.preventDefault()
        console.log("data reset")
    }

    return (
        <div>
            <input type={"text"} onChange={changeInput} placeholder={"login"}/>
            <input type={"text"} onBlur={blurInput} placeholder={"password"}/>
            <input type={"text"} onBeforeInput={changeInput}/>
            <input type={"text"} onFocus={changeInput}/>

            <form onSubmit={submit} onReset={reset}>
                <input type={"text"} placeholder={"user name"}/>
                <input type={"text"} placeholder={"email"}/>
                <label >
                    отметить
                <input type={"checkbox"}/>
                </label>

                <button type={"submit"}>send</button>
                <button type={"button"} onClick={() => console.log("click")}>test</button>
                <button type={"reset"} >reset</button>


            </form>
        </div>
    );
}

export default PostPage;