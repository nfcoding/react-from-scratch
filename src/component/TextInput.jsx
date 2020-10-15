import React from 'react'

function TextInput(props) {
    const { changeInput } = props
    return (
        <input type="text" onChange={changeInput} />
    )
}

export default TextInput