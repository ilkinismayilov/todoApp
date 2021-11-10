import React,{useState} from 'react'

import './TodoForm.css'

const TodoForm = ( {addTask} ) => {

    const [inputValue, setinputValue] = useState('')
    
    const onSubmitHandler = (e) => {
        e.preventDefault();

        if(inputValue.length === 0 || inputValue.trim() === ''){
            alert("Please add task");
            setinputValue('')
        }else{
            addTask(inputValue);
            setinputValue('');
        }

        
    }

    const onChangeHandler = (e) => {
        e.preventDefault();
        setinputValue(e.target.value)
    }

    return ( 

        <div>
            <form action="#" onSubmit={onSubmitHandler} >
                <div className="form">
                    <label className="label" htmlFor=""> Add Task</label>
                    <input className="form-control" type="text" name="task" id="task" value={inputValue} placeholder="Add Task" onChange={onChangeHandler} />
                </div>
                <button className="button" type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm
