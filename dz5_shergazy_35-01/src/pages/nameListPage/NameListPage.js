import React, { useState } from 'react';

function NameList() {
    const [names, setNames] = useState([]);
    const [newName, setNewName] = useState('');
    const [emptyMessage, setEmptyMessage] = useState(false);

    const handleChange = (e) => {
        setNewName(e.target.value);
    };

    const handleAdd = () => {
        if (newName.trim() !== '') {
            setNames([...names, newName.trim()]);
            setNewName('');
            setEmptyMessage(false);
        }
    };

    const handleUpdate = (index) => {
        const updatedName = prompt('Введите новое имя:');
        if (updatedName && updatedName.trim() !== '') {
            const updatedNames = [...names];
            updatedNames[index] = updatedName.trim();
            setNames(updatedNames);
        }
    };

    return (
        <div>
            <input type="text" value={newName} onChange={handleChange} placeholder="Введите имя" />
            <button onClick={handleAdd} disabled={!newName.trim()}>Добавить</button>
            {emptyMessage && <p>Список пуст</p>}
            <ul>
                {names.map((name, index) => (
                    <li key={index}>
                        {name}
                        <button onClick={() => handleUpdate(index)} disabled={!newName.trim()}>Поменять</button>
                    </li>
                ))}
            </ul>
            {names.length === 0 && !emptyMessage && <p>Список пуст</p>}
        </div>
    );
}

export default NameList