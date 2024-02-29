import { nanoid } from '@reduxjs/toolkit'
import React, { useContext, useState } from 'react'
import InputText from '../components/InputText';
import Button from '../components/Button';
import { StateContext } from '../context/Context';

function Admin() {
  const { state, dispatch } = useContext(StateContext)
  const [task, setTask] = useState("")
  const [time, setTime] = useState("")
  const [tasks, setTasks] = useState([])
  const addTaskHandler = (e) => {
    e.preventDefault();
    let newTask = {
      task: task,
      time: time,
      id: nanoid()
    }
    dispatch({ type: "ADD_TASK", payload: newTask })
    e.target.reset()
  }
  const onchangeTaskHandler = (e) => {
    setTask(e.target.value)
  }
  const onchangeTaskTimeHandler = (e) => {
    setTime(e.target.value)
  }
  return (
    <div className=' w-1/4  flex flex-col min-h-56 border-2 rounded-lg  mt-10 m-auto'>
      <h2 className='p-7  font-bold font-serif text-2xl'>Tasks</h2>
      <form onSubmit={addTaskHandler} action="" className='flex flex-col gap-3 px-7 items-center justify-center'>
        <InputText type='text' onchangeHandler={onchangeTaskHandler} title='Enter task name' />
        <InputText type='text' onchangeHandler={onchangeTaskTimeHandler} title='Enter task time' />
        <Button >
          <span className='text-white p-2 bg-blue-500 px-10 rounded font-semibold'>Add</span>
        </Button>
      </form>
    </div >
  )
}

export default Admin;