
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const UserForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [users, setUsers] = useState([]);

    const onSubmit = (data) => {
        setUsers([...users, data]);
        reset();
    };

    const handleDelete = (index) => {
        const updatedUsers = [...users];
        updatedUsers.splice(index, 1);
        setUsers(updatedUsers);
    };

    const handleClearTable = () => {
        setUsers([]);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input type="text" placeholder="Имя" {...register("name", { required: true })} />
                {errors.name && <span>обязательно</span>}
                <input type="text" placeholder="Фамилия" {...register("username", { required: true })} />
                {errors.username && <span>обязательно</span>}
                <input type="email" placeholder="Email" {...register("email", { required: true })} />
                {errors.email && <span>обязательно</span>}
                <input type="tel" placeholder="Номер телефона" {...register("phone", { required: true })} />
                {errors.phone && <span>обязательно</span>}
                <input type="text" placeholder="сайт" {...register("website")} />
                <button type="submit">создать</button>
                <button type="button" onClick={handleClearTable}>очистить</button>
            </form>
            {users.length === 0 ? (
                <p>Пуста</p>
            ) : (
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Website</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                            <td>{user.email}</td>
                            <td>{user.phone}</td>
                            <td>{user.website}</td>
                            <td><button onClick={() => handleDelete(index)}>Удалить</button></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default UserForm;