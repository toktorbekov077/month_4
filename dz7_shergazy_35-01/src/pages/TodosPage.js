import React, { useEffect, useState } from 'react';

function TodosPage(props) {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    const [updateInput, setUpdateInput] = useState('');
    const [isUpdating, setIsUpdating] = useState(null);

    async function getTodos() {
        const response = await fetch('http://localhost:8000/todos');
        const data = await response.json();
        setTodos(data);
    }

    async function createTodo(event) {
        event.preventDefault();
        setInput('');
        const todo = {
            title: input,
            status: false
        };

        const response = await fetch('http://localhost:8000/todos', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo)
        });

        if (response.ok) {
            getTodos();
        }
    }

    async function deleteTodo(id) {
        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            getTodos();
        }
    }

    async function changeStatus(id, status) {
        const todo = {
            status: status
        };

        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo)
        });

        if (response.ok) {
            getTodos();
        }
    }

    async function updateTodo(id) {
        const todo = {
            title: updateInput
        };

        const response = await fetch(`http://localhost:8000/todos/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(todo)
        });

        if (response.ok) {
            setIsUpdating(null);
            setUpdateInput('');
            getTodos();
        }
    }

    useEffect(() => {
        getTodos();
    }, []);

    return (
        <div style={{ padding: '30px' }}>
            <h1>Todos</h1>
            <form onSubmit={createTodo}>
                <input value={input} type="text" onChange={(event) => setInput(event.target.value)} />
                <button>create todo</button>
            </form>
            {
                todos.map(todo => (
                    <div key={todo.id} className={todo.status ? 'line' : ''}>
                        {isUpdating === todo.id ? (
                            <div>
                                <input
                                    type="text"
                                    value={updateInput}
                                    onChange={(event) => setUpdateInput(event.target.value)}
                                />
                                <button onClick={() => updateTodo(todo.id)}>update</button>
                            </div>
                        ) : (
                            <div>
                                <input
                                    type="checkbox"
                                    checked={todo.status}
                                    onChange={(event) => changeStatus(todo.id, event.target.checked)}
                                />
                                <span>{todo.title}</span>
                                <button onClick={() => deleteTodo(todo.id)}>delete</button>
                                <button onClick={() => setIsUpdating(todo.id)}>edit</button>
                            </div>
                        )}
                    </div>
                ))
            }
        </div>
    );
}

export default TodosPage;