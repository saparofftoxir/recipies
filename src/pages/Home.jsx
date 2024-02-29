import React, { useContext, useState } from 'react'
import Button from '../components/Button';
import Card from '../components/Card';
import { StateContext } from '../context/Context';

function Home() {
  const { state } = useContext(StateContext)
  console.log(state.tasks)
  return (
    <div className=' w-1/4 bg-cyan-600 flex flex-col min-h-40 rounded-lg  mt-10 m-auto'>
      <h2 className='p-7 text-white font-bold font-serif text-3xl'>Tasks <sup>{state.tasks.length}</sup></h2>

      <div className=' w-full justify-center items-center min-h-12 bg-gray-100 mt-5 rounded-t-3xl '>
        {state.tasks.map(item => <Card key={item.id} item={item} />)}
      </div>
    </div >
  )
}
export default Home;