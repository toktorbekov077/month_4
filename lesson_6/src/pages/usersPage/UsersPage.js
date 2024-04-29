import React from 'react';

function UsersPage(props) {

    const [user, setUser] = React.useState({
        user: "",
        email: "",
        age: ""

    });
    const changeInput =(event) => {
        const {value, name} = event.target

        setUser({
            ...user,
            [name]: value
        })
}

const handleSubmit = (event) => {
        event.preventDefault()
    if ( user.name.trim() === '' || user.email.trim() === ''|| user.age.trim() === '')
        alert("пустой")
}
    return (
        <div>
            <h1>create user</h1>
            <button onClick={() => setUser({
                user: "",
                email: "",
                age: ""
            })}>reset</button>
            <form onChange={changeInput} onSubmit={handleSubmit}>
            <input type={"text"} placeholder={"user"} />
            <input type={"text"} placeholder={"email"}/>
            <input type={"number"} placeholder={"age"}/>
            <button> send</button>
            </form>
        </div>
    );
}

export default UsersPage;