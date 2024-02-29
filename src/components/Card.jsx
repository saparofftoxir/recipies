import React, { useContext } from 'react'
import { MdOutlineDeleteOutline } from "react-icons/md";
import Button from './Button';
import { StateContext } from '../context/Context';
function Card({ item }) {
    const { dispatch } = useContext(StateContext)
    const deleteTask = () => {
        dispatch({ type: "DELETE_TASK", payload: item.id })
    }
    return (
        <div className='w-full flex flex-col items-center justify-center  px-3 h-10 '>
            <div className='text-black text-xl w-full flex items-center justify-between'>
                <h2>{item?.task}</h2>
                <h2>{item?.time}</h2>
                <Button click={deleteTask}>
                    <MdOutlineDeleteOutline />
                </Button>
            </div>
        </div>
    )
}
export default Card;