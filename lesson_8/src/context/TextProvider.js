import {createContext} from "react";
import {useState} from "react";


const TextContext = createContext({})

export const useTextContext = () => {
    return useTextContext(TextContext)
}

function TextProvider ({ children}) {
    const [text, setText] = useState("hello world")

    function changeText () {
        setText("new text")
    }

    const value = {
        text, changeText
    }
    return (
        <TextContext.Provider value={value}>
            {children}
        </TextContext.Provider>
    )
}
export default TextProvider;