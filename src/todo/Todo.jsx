import {useState} from "react";
import data from "./data.json"


function Todo(){
    const [tasks, setTasks] = useState(data);

    const addTask = function(){
        const newTasks = tasks;
        newTasks.push({task_name: newTaskName});
        
        setTasks(newTasks);
        setNewTaskName("")
    }

    const completeTask = function (taskName) {
        const filteredTasks = tasks.filter(function (task) {
            return task.task_name !== taskName;
        });

        setTasks(filteredTasks);
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
            return <li key={task.task_name}>{task.task_name}
                <button onClick={() => completeTask(task.task_name)}>complete task</button>
            </li>
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
            <h2>Todo</h2>
            <input onChange={()=>handleInputChange(event)}/> 
            <button onClick={()=>addTask()}>add task</button>
            {renderTasks()}
            
            
        </div>
    );
}

export default Todo;
    