
import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { TaskArea, } from './components/TaskArea'

import './styles/global.css'

export interface ITasks {
   id: string;
   title: string;
   isCompleted: boolean;
}

const LOCAL_STORAGE_KEY = "todo:savedTasks";


function App() {
   const [tasks, setTasks] = useState<ITasks[]>([]);

   function loadSAvedTasks() {
    const saved =  localStorage.getItem(LOCAL_STORAGE_KEY);
    if (saved) {
      setTasks(JSON.parse(saved))
    }
   }

   useEffect(() =>{
      loadSAvedTasks()
   },[])

   function setTasksAndSave(newTasks: ITasks[]) {
      setTasks(newTasks)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(newTasks));
   }

   function addTask(taskTitle: string) {
      setTasksAndSave([
         ...tasks,
         {
            id: crypto.randomUUID(),
            title: taskTitle,
            isCompleted: false
         }
       ]);
     }


     function deleteTaskById(taskId: string) {
         const newTasks = tasks.filter((task) => task.id !== taskId)
         setTasksAndSave(newTasks);
     }

     function toggleCompletedTaskById(taskId: string) {
       const newTasks = tasks.map((task) => {
          if(task.id === taskId) {
           return{
            ...task,
            isCompleted: !task.isCompleted,
           }
          }
          return task;
       });
       setTasksAndSave(newTasks);
     }
  

   return (
    <div className='w-screen h-screen bg-gray-600 min-h-screen antialiased text-gray-100' >
       <Header onAddTask={addTask} />
       <TaskArea 
           tasks={tasks}
            onDelete={deleteTaskById}
            onComplete={toggleCompletedTaskById} 
        />
      
      </div>
  )
}

export default App
