import React from 'react';

const Modal = ({  onClose, onCreateUser, onDelete, action }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                {action === 'create' ? (
                    <>
                        <h2>Create User</h2>
                        <form onSubmit={onCreateUser}>
                        </form>
                    </>
                ) : action === 'delete' ? (
                    <>
                        <h2>Delete User</h2>
                        <p>Are you sure you want to delete this user?</p>
                        <button onClick={onDelete}>Delete</button>
                    </>
                ) : null}
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
};

export default Modal;