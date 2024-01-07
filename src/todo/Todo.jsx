import {useState} from "react";
import data from "./data.json"


function Todo(){
    const [tasks, setTasks] = useState(data);

    const addTask = function(){
        const newTasks = tasks;
        newTasks.push({task_name: newTaskName});
        
        setTasks(newTasks);
    }

    const completeTask = function (id){
        console.log(`Should remove item with id ${id} from list`)
    }
    
    const renderTasks = function () {
        return(
            <ul>
                {mapTaskNamesToListElements()}
            </ul>
        )
    }
    
    const mapTaskNamesToListElements = function(){
        return tasks.map(function (task){            
            return <li key={task.task_name}>{task.task_name}</li>
        })
    }
    
    const [newTaskName, setNewTaskName] = useState("new task");
    
    const handleInputChange = function (e) {
        const inputValue = e.target.value;
        setNewTaskName(inputValue);
        console.log(newTaskName)
    }

return(
        <div>
            <h1>todo</h1>
            <input onChange={()=>handleInputChange(event)}/> 
            <button onClick={()=>addTask("testname", "testdesc", new Date())}>add task</button>
            {renderTasks()}
            <button onClick={()=>completeTask(id)}>complete task</button>
            
        </div>
    );
}

export default Todo;
    