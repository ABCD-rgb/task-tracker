import React from 'react'
import Task from './Task'




const Tasks = ({tasks, onToggle, onDelete}) => {
  return (
    <div>
        {tasks.map((task) => (
          <Task task={task} onToggle={onToggle} onDelete={onDelete}/>
        ))}
    </div>
  )
}

export default Tasks