import { TaskList } from "../TaskList";

export function Tasks() {
    return(
        <section className=" w-full  max-w-[46rem]  m-auto mt-[5.625rem] px-0 py-1">
          <header className="flex justify-between items-center mt-6">
            <div className="flex gap-2 items-center" >
                <p className="text-blue-100 font-bold">Tarefas criadas</p>
                <span className="flex items-center justify-center py-3 px-4 bg-gray-400 w-6 h-5 rounded-3xl font-bold text-xs text-gray-200">10</span>
            </div>

            <div className="flex gap-2 items-center">
                <p className="text-purple-100 font-bold">Concluídas</p>
                <span className="flex items-center justify-center py-3 px-1 bg-gray-400 w-[3.25rem]  h-5 rounded-3xl font-bold text-xs text-gray-200">5 de 10</span>
            </div>

           
          </header>  
          <div className="mt-6" >
                <TaskList />
                <TaskList />
            </div> 
        </section>
    )
}