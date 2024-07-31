import { useState } from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks';

function App() {
  const [tasks, setTasks ] = useState([
    {
        id: 1,
        text: 'Complete React tutorial',
        day: '2024-07-30',
        reminder: true,
    },
    {
        id: 2,
        text: 'Submit project proposal',
        day: '2024-08-01',
        reminder: false,
    },
    {
        id: 3,
        text: 'Attend team meeting',
        day: '2024-08-03',
        reminder: true,
    }, 
])

// Delete Task
const deleteTask = (id) => {
  setTasks(tasks.filter((task) => task.id !== id ))
}

  return (
    <div className="container">
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} /> : 'No Tasks to Show'}
    </div>
  );
}



export default App;
