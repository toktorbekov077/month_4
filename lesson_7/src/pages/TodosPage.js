import React, {useEffect, useState} from 'react';

function TodosPage(props) {

    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')

    async function getTodos () {

        const response = await fetch('http://localhost:8000/todos')
        const data = await response.json()
        setTodos(data)

    }

    async function createTodo(event) {
        event.preventDefault()
        setInput("")
        const todo = {
            title: input,
            status: false
        }

        const response = await fetch('http://localhost:8000/todos', {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(todo)
        })
    }

    if (response.ok){
        getTodos()
    }


    async function deleteTodo(id) {
        const response = await fetch(`http://localhost:8000/todos/${id}`,{
            method: "DELETE"
        })
    async function changeStatus (id, status) {

    }


    useEffect(() => {
        getTodos()
    }, [])

    return (
        <div>
            <h1>Todos</h1>
            <form onSubmit={createTodo}>
                <input value={input} type="checkbox" onChange={(event) => setInput(event.target.value ) }/>
                <button>create todo</button>
            </form>
            {
                todos.map(todo => <p key={todo.id}>{todo.title} <button onClick={() => deleteTodo(todo.id)}>delete</button></p> )
            }
        </div>
    );
}

export default TodosPage;