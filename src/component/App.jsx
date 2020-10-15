import React, { useState } from 'react'
import Button from './Button'
import TextInput from './TextInput'

function App() {

    const [inputValue, setInputValue] = useState('')
    const color = 'red'
    function onButtonClick() {
        // console.log('button di click')
        alert(inputValue)
    }

    function onInputChange(event) {
        // console.log(event.target.value)
        setInputValue(event.target.value)
    }
    return (
        <div>
            App : {inputValue}<br />
            <TextInput changeInput={onInputChange} />
            <Button
                color={color}
                buttonClick={onButtonClick}
            />
        </div>


    )
}

export default App