import React,  from 'react';
import {useTextContext} from "../../context/TextProvider";

function Text() {

    const {text} = useTextContext()

    return (
        <div>
            {text}
        </div>
    );
}

export default Text;
