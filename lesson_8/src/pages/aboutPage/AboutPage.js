import React from 'react';
import Text from "../../components/text/Text";
import {useTextContext} from "../../context/TextProvider";

function AboutPage(props) {
    const {text, changeText} =useTextContext()
    return (
        <div>
            <h1>About Page - {text}</h1>
            <button onClick={changeText}>Change text</button>
        </div>
    );
}

export default AboutPage;