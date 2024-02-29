import React from 'react'

function InputText({ title, onchangeHandler, type }) {
    return (
        <input
            onChange={onchangeHandler}
            required className='w-full  p-1 pl-4 rounded outline-none border border-blue-300'
            type={type}
            placeholder={title} />
    )
}

export default InputText;