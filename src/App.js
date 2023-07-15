import React, { useState } from 'react'
import Header from './Components/Header'
import Tasks from './Components/Tasks'
import AddTask from './Components/AddTask'


const App = () => {
  const [showAddForm, setShowAddForm] = useState(false)

  const [tasks, setTasks] = useState([
    {
        text: "Study",
        day: "07/15/23",
        reminder: false,
        id: 1
    },
    {
        text: "Clean house",
        day: "07/18/23",
        reminder: false,
        id: 2
    },
    {
        text: "Wash dishes",
        day: "7/18/23",
        reminder: true,
        id: 3
    }
  ])

  const addTask = (task) => {
    setTasks([...tasks, task])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id? {...task, reminder: !task.reminder} : task))
  }

  return (
    <div className='container'>
      <Header title={"Task Tracker"} onClick={() => setShowAddForm(!showAddForm)} showAdd={showAddForm}/>
      {showAddForm && <AddTask onAdd={addTask}/>}  
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete ={deleteTask}/> : "No tasks to show "}
    </div>
  )
}

export default App