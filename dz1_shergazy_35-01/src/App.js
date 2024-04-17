import logo from './logo.svg';
import './App.css';

function Title () {
    return (
        <h2>Title</h2>
    )
}

function Header() {
    return (
        <div>
            <Title />
            <p>Header</p>
        </div>
    );
}
function Content () {
    return (
        <>
            <Title />
            <p className={"content"}>Content</p>
        </>
    )
}

function Footer () {
    return (
        <>
            <div>
                <Title />
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
            <Content/>
            <Footer/>
        </div>
    );
}