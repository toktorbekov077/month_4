import logo from './logo.svg';
import './App.css';

function Header () {
    return (
        <h1>Header</h1>
    )
}

function Footer () {
    return (
        <>
            <div>
                <p className={"text"}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </div>
            <p>Lorem ipsum dolor sit amet.</p>
        </>
    )
}

function App() {
    return (
        <div>
            <Header/>
            <h1>Hello world</h1>
            <Footer/>
        </div>
    );
}

export default App;
lesson-1