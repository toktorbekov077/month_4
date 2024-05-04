import React, { useState, useEffect } from 'react';
import Modal from "../../modal/Modal";

const UserTable = () => {
    const [users, setUsers] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [action, setAction] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/users')
            .then((response) => response.json())
            .then((data) => setUsers(data));
    }, []);

    const handleDeleteUser = async (id) => {
        try {
            const response = await fetch(`http://localhost:8000/users/${id}`, {
                method: 'DELETE',
            });
            const data = await response.json();
            console.log(data);
            setUsers(users.filter((user) => user.id !== id));
            setIsModalOpen(false);
        } catch (error) {
            console.error(error);
        }
    };

    const handleModalOpen = (user, action) => {
        setSelectedUser(user);
        setAction(action);
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleCreateUser = async () => {
        console.log('Creating user...');
        setIsModalOpen(false);
    };

    const handleDelete = async () => {
        console.log('Deleting user...');
        if (selectedUser) {
            handleDeleteUser(selectedUser.id);
        }
    };

    return (
        <div>
            <h2>Users</h2>
            <button onClick={() => handleModalOpen(null, 'create')}>Create User</button>
            {users.length > 0 ? (
                <table>
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {users.map((user) => (
                        <tr key={user.id}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.username}</td>
                            <td>
                                <button onClick={() => handleModalOpen(user, 'delete')}>Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            ) : (
                <p>Список пуст</p>
            )}
            {isModalOpen && (
                <Modal
                    user={selectedUser}
                    onClose={handleModalClose}
                    onCreateUser={handleCreateUser}
                    onDelete={handleDelete}
                    action={action}
                />
            )}
        </div>
    );
};

export default UserTable;