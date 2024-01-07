import { useState } from "react";
import data from "./data.json";
import { v4 as uuidv4 } from 'uuid'; // for generating ids
import styles from "./Todo.module.css";  // import styles

function Todo() {
    const generateDataWithIds =  function () {
        return data.map(function (task) {
            let newTask = {...task};
            newTask.task_id = uuidv4();
            return newTask;
        });
    }

    const [tasks, setTasks] = useState(generateDataWithIds());
    const [newTaskName, setNewTaskName] = useState("input default value");

    const addTask = function() {
        const newTask = { task_name: newTaskName, task_id: uuidv4() };
        const newTasks = [...tasks, newTask];
        setTasks(newTasks);
        setNewTaskName("");
    }

    const completeTask = function (taskId) {
        const filteredTasks = tasks.filter(function (task) {
            return task.task_id !== taskId;
        });
        setTasks(filteredTasks);
    }

    const renderTasks = function () {
        return (
            <ul className={styles.taskList}>
                {mapTaskNamesToListElements()}
            </ul>
        )
    }

    const mapTaskNamesToListElements = function() {
        return tasks.map(function (task) {
            return (
                <li className={styles.taskItem} key={task.task_id}>
                    {task.task_name}
                    <button className={styles.taskButton} onClick={() => completeTask(task.task_id)}>complete task</button>
                </li>
            )
        })
    }

    const handleInputChange = function (e) {
        const inputValue = e.target.value;
        setNewTaskName(inputValue);
    };

    return(
        <div>
            <h2>Todo</h2>
            <input
                className={styles.taskInput}
                value={newTaskName}
                onChange={(event) => handleInputChange(event)}
            />
            <br/>
            <button onClick={() => addTask()}>add task</button>
            {renderTasks()}
        </div>
    );
}

export default Todo;