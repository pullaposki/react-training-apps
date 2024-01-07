import {useState} from "react";
import data from "./data.json"
import { v4 as uuidv4 } from 'uuid'; // for generating ids

function Todo(){
    const [tasks, setTasks] = useState(data);
    const [newTaskName, setNewTaskName] = useState("new task");


    generateIdsForTasks();
    function generateIdsForTasks(){
        let newTasks = tasks.map(function (task){
            let newTask = {...task}
            newTask.task_id = uuidv4();
            console.log(newTask)
            return newTask;
        });

        console.log(newTasks);
    }
    
    const addTask = function(){
        const newTask = {task_name: newTaskName, task_id: new Date().getTime()}
        const newTasks = [...tasks, newTask];
        
        setTasks(newTasks);
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
            return <li key={task.task_id}>
                {task.task_name}
                <button onClick={() => completeTask(task.task_name)}>complete task</button>
            </li>
        })
    }

    
    const handleInputChange = function (e) {
        const inputValue = e.target.value;
        setNewTaskName(inputValue);
    }

return(
        <div>
            <h2>Todo</h2>
            <input onChange={(event)=>handleInputChange(event)}/> 
            <button onClick={()=>addTask()}>add task</button>
            {renderTasks()}
        </div>
    );
}

export default Todo;

    