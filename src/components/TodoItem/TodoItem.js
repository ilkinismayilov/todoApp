import React from 'react'
import { FaRegTrashAlt,FaCheckSquare } from 'react-icons/fa';
import "./TodoItem.css"

const TodoItem = ( {task,checkedTask,deleteTask} ) => {

    const deleteHandler = () => {
          deleteTask(task.id,task.isDone)
    }
    const checkedHandler = () => {
      
        checkedTask(task.id)
    }

    return (
        <li className={`todo-item ${task.isDone ? 'checked' : '' }`} key={task.id}> 
            {task.title} 
            <div className="icons">
                <button type="button" onClick={deleteHandler}> <FaRegTrashAlt/> </button>
                <button type="button" onClick={checkedHandler} > <FaCheckSquare/>     </button>
            </div>
        </li>
    )
}

export default TodoItem