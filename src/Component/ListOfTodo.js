import React from 'react'

const ListOfTodo = (props) => {
  return (

      <li className='list-item'>
        {props.item}
        <span className='icons'>
        <i className="fa-regular fa-trash-can icon-delete" onClick={(e)=>{
            props.deleteItme(props.index)
        }}></i>
        </span>
      </li>

  )
}

export default ListOfTodo
