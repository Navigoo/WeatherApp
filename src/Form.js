import React, { useRef, useState } from 'react';
const Form = () => {

    const textbox = useRef(null);
    const [ textboxValue, setTextboxValue ] = useState('Mitt värde från början');
    
    return <div>
        <input type="text" ref={textbox} onChange={(event) => setTextboxValue(event.target.value)} value={textboxValue}></input>
        <p>Textboxens värde: {textboxValue}</p>
        <button onClick={() => textbox.current.focus()}>Fokusera textbox</button>
        <button onClick={() => setTextboxValue("Hej")}>Sätt värdet till Hej</button>
    </div>

}

export default Form;