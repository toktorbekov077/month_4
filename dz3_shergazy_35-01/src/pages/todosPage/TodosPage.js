import React from 'react';
import Todo from "../../components/todo/Todo";
const TodosPage = () => {
    const todos = ["todo 1", "todo 2", "todo 3"];

    return (
        <div>
            <h1>Todos Page</h1>
            {todos.map((todo, index) => (
                <Todo key={index} todo={todo} />
            ))}
        </div>
    );
};

export default TodosPage;