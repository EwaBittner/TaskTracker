import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from './components/AddTask';

const App = () => {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Doctors Appointment",
        day: '23.02.2022 at 2pm',
        reminder: true
    },
    {
        id: 2,
        text: "Meeting at Uni",
        day: '13.03.2022 at 10am',
        reminder: true
    },
    {
        id: 3,
        text: "Food shopping",
        day: '20.03.2022 at 3:30pm',
        reminder: false
    },
])

// Delete task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTasks(
    tasks.map((task) => 
      task.id === id ? { ...task, reminder:
      !task.reminder } : task
    )
  )
}

  return (
    <div className="container">
      <Header />
      <AddTask />
      {tasks.length > 0 ? (
        <Tasks 
          tasks={tasks} 
          onDelete={deleteTask} 
          onToggle={toggleReminder}
        />
      ) : (
        'No tasks to show'
      )}
    </div>
  );
}

export default App;
