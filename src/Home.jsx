import { useState } from "react";
import TaskForm from './components/TaskForm';

export default function Home() {
    const [tasks, setTasks] = useState('');
    
    const handleAddTask = (newTask) => {
        setTasks((prev) => [...prev, newTask]);
    }

    return (
        <div className="p-4">
            <h1>matchamind</h1>
            <TaskForm onAddTask={handleAddTask} />
        </div>
    )
}