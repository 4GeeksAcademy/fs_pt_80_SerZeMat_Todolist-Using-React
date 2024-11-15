import React, { useState } from 'react';
//import rigoImage from "../../img/rigo-baby.jpg";

//create your first component


const TodoList = () => {

  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = (e) => {
    if (e.key !== 'Enter' || newTask === '')
      return;
    {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleDeleteTask = (index) => {
    setTasks([
      ...tasks.slice(0, index),
      ...tasks.slice(index + 1)
    ]);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <input className="input"
        type="text" value={newTask} onChange={(e) => setNewTask(e.target.value)} onKeyDown={handleAddTask} placeholder="Add a new task" />
      <ul className="list">
        {tasks.length === 0 ? (
          <li className="no-tasks">There is no task left, add a new one</li>
        ) : (
          tasks.map((task, index) => (
            <li className="task" key={index}>
              {task}
              <span className="delete" onClick={() => handleDeleteTask(index)}> ❌ </span>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default TodoList;

