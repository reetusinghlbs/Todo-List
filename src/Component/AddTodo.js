import React, { useState } from 'react'

const AddTodo = (props) => {
    // 1st targer:- whatever we will write in our input box that should be store so we will store that data in the state we befine useState here, then we will target our inputData in the input feild.

    // 2nd target: whatever i will enter in our input area that should be store in the array.so we will make this in APP.js file.

    // 3rd whatever we add that is in my array so now i want to display whatever i am adding that  should be display so for it will make new file ListOfTodo

    const[inputData, setInputData]=useState('');

    // this is the optional functionality if you want do make you can.
    const handleEnterKey = (e) =>{
        if (e.keyCode === 13) {
            props.addList(inputData);setInputData('');
        }
    }
  return (
    <div className='input-container'>
      <input type='text' placeholder='Enter todo...' className='input-box-todo' value={inputData} onChange={(e)=> setInputData(e.target.value)} onKeyDown={handleEnterKey}></input>

      <button className='add-btn' title='Add' onClick={()=>{
        props.addList(inputData);setInputData('')}}>+</button>

      {/* <h2>{inputData}</h2>  here we can check whatever we txarget in our input feild the is working or not data is coming or not */}
    </div>
  )
}

export default AddTodo
