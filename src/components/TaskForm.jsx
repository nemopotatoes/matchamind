import { useState } from "react";
import TaskNameInput from './TaskNameInput';

export default function TaskForm({ onAddTask }){
    const [task, setTask] = useState('');
    const [duration, setDuration] = useState('');
    const [priority, setPriority] = useState('medium');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task) return;

        const newTask = {
            id: Date.now(),
            name: task,
            duration,
            priority,
        };

        onAddTask(newTask);
        console.log("task added:", newTask);

        setTask('');
        setDuration('');
        setPriority('');
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 space-y-4">
            <TaskNameInput value={task} onChange={(e) => setTask(e.target.value)} />
            <button className="cursor-pointer" type="submit">Add Task</button>
        </form>

    );
}