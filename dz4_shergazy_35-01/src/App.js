import React, { useState, useEffect } from 'react';
import MainPage from "./pages/mainPage/MainPage";
import ErrorPage from "./pages/errorPage/ErrorPage";

const App = () => {
    const [user, setUser] = useState({ name: '', lastname: '' });

    useEffect(() => {
        const name = prompt('Введите ваше имя');
        const lastname = prompt('Введите вашу фамилию');
        if (name === 'John' && lastname === 'Johns') {
            setUser({ name, lastname });
        } else {
            setUser({ name, lastname });
        }
    }, []);

    return (
        <div>
            {user.name === 'John' && user.lastname === 'Johns' ? (
                <MainPage user={user} />
            ) : (
                <ErrorPage user={user} />
            )}
        </div>
    );
};

export default App;