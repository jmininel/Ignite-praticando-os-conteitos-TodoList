import { ITasks } from "../../App";
import { TaskList } from "../TaskList";
import { TbClipboardText } from "react-icons/tb";

interface Props {
   tasks: ITasks[];
   onDelete: (taskId: string) => void;
   onComplete: (taskId: string) => void;
 }
 
export function TaskArea({tasks, onDelete, onComplete}: Props) {
    const tasksQuantity = tasks.length;
    const completedTasks = tasks.filter((task) => task.isCompleted).length;

    return(
        <section className=" w-full  max-w-[46rem]  m-auto mt-[5.625rem] px-0 py-1">
          <header className="flex justify-between items-center mt-6">
            <div className="flex gap-2 items-center" >
                <p className="text-blue-100 font-bold">Tarefas criadas</p>
                <span className="flex items-center justify-center py-3 px-4 bg-gray-400 w-6 h-5 rounded-3xl font-bold text-xs text-gray-200">{tasksQuantity}</span>
            </div>

            <div className="flex gap-2 items-center">
                <p className="text-purple-100 font-bold">Concluídas</p>
                <span className="flex items-center justify-center py-3 px-1 bg-gray-400 w-[3.25rem]  h-5 rounded-3xl font-bold text-xs text-gray-200">{completedTasks} de {tasksQuantity}</span>
            </div>

           
          </header>  
          <div className="mt-6" >
            {tasks.map((task) => (
                <TaskList
                 key={task.id}
                 task={task}
                 onDelete={onDelete}
                 onComplete={onComplete}
            />                    
              
            ))}
             {tasks.length <= 0 && (
              <section className="flex justify-center items-center flex-col mt-10 gap-1 text-gray-300">
                <TbClipboardText className="opacity-[0.3]" size={40}/>

               <div>
                <p className="font-bold">Você ainda não tem tarefas cadastradas</p>
                <span>Crie tarefas e organize seus itens a fazer</span>
               </div>

              </section>
             )}
          
            </div> 
        </section>
    )
}