import React, {useState, useEffect} from 'react';
import TaskDetails from './TaskDetails';
import './TaskList.css';
import Navbar from './Navbar';


const TaskList = () => {
    const[tasks, setTasks] = useState([]);
    const[taskState, setTask] = useState();

    useEffect(()=>{
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try{
            const response = await fetch('http://localhost:4000/api/tasks');
            const data = await response.json();
            setTasks(data);

        }   catch (error) {
            console.error('Error fetching tasks: ', error);
        }
    };

    // const select = () => {
    //     return taskParam;
    // }

    const handleDelete = async (task) => {
        try {
            // Send DELETE request to delete the task
            const response = await fetch(`/api/tasks/${task.id}/delete`, {
                method: 'DELETE'
            });

            if (response.ok) {
                // Update component state or perform any necessary actions
                console.log(task);
            } else {
                console.error('Error deleting task');
            }
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    return (
        <div>
            <Navbar />

            <h2 style={{ textAlign: "center" }}>Task List</h2>
            <ul className="tasks">
                {tasks.map(task => (
                    <li key={task.id}><span onClick={() => setTask(task)}><span>{task.title}</span></span> 
                    <button onClick={() => handleDelete(task)}>Delete</button></li>
                ))}
            </ul>

            <TaskDetails details={taskState} />
        </div>
    );
};

export default TaskList;