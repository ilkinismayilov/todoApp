import React from 'react'
import TodoForm from '../TodoForm/TodoForm'
import TodoItem from '../TodoItem/TodoItem'
import "./TodoItemList.css"

const TodoItemList = ( {addTask, tasks , deleteTask, checkedTask} ) => {
    return (
        <div className="todo-list">
            <TodoForm addTask={addTask} />
            {tasks.length > 0 ?  tasks.map( (task,index) => 
                <TodoItem key={index} task={task} addTask={addTask} deleteTask={deleteTask} checkedTask={checkedTask}  />) : 
                <div className="noTask">No Task</div> }            
        </div>
    )
}

export default TodoItemList
