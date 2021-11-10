import React,{useState} from 'react'
import './App.css';
import TodoItemList from './components/TodoItemList/TodoItemList';

function App() {

  const [tasks, settasks] = useState( [
    { "title" : "test 1" , "id" : 1 , isDone: false },  
    { "title" : "test 2" , "id" : 2 , isDone: false }  
  ])

  const addTask = (task) => {  
    const id = Math.floor( (Math.random() * 9999) + 1 ); 
    settasks(oldArray => [...oldArray, {"title" : task , "id" : id } ]);
    console.log(tasks);
  }

  const checkedHandler = (id) => {
    settasks(prevSate => prevSate.map(item => item.id === id ? {"title": item.title, "id" : item.id , "isDone" : !item.isDone} : item ))
  }

  const deleteHandler = (id,isDone) => {
    if(isDone === true){
       settasks(prevSate => {
        const updTasks = prevSate.filter(item => item.id !== id);
        return updTasks;
      });
    }else{
      alert("Complete the task, then delete it")
    }
  }


  return (
    <div className="App">
        <TodoItemList addTask={addTask} tasks={tasks} deleteTask={deleteHandler} checkedTask={checkedHandler} />
    </div>
  );
}

export default App;
