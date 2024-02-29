import React from 'react'

function Button({ children, click }) {
    return (
        <button
            className='p-1 rounded'
            onClick={click}>
            {children}
        </button>

    )
}

export default Button;