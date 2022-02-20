import { useState } from 'react';
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
