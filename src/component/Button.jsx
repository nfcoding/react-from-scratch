import React from 'react'


function Button(props) {
    const { color, buttonClick } = props
    return (
        <button
            type="button"
            style={{ backgroundColor: color }}
            onClick={buttonClick}
        >
            Click
        </button>
    )
}

export default Button