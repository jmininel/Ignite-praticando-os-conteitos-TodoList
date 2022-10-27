import  Logo  from '../../assets/Logo.svg';
import { AiOutlinePlusCircle } from 'react-icons/ai'
import { ChangeEvent, FormEvent, useState } from 'react';

interface Props {
    onAddTask: (taskTitle: string) => void;
}

export function Header({onAddTask}: Props) {
    const [title, setTitle] = useState("");  //estado do titulo atual
     
    function handleSubmit(event: FormEvent) {
       event.preventDefault();

       onAddTask(title); //adiona o novo imput
       setTitle("");  //limpar o input
    }

    function OnChangeTitle(event: ChangeEvent<HTMLInputElement>) {
        setTitle(event.target.value)
    }

    return(
        <header className=" flex items-center justify-center relative bg-gray-700 w-full h-[12.5rem]">
            <img src={Logo} className="mb-[3.375rem]" />

            <form onSubmit={handleSubmit} className="flex w-full  absolute  max-w-[46rem] gap-2  bottom-[calc(-3.375rem/2)] ">
                <input
                 onChange={OnChangeTitle}
                 value={title}
                 className="h-full flex-1 border-none rounded-lg py-4 bg-gray-500 mr-2 placeholder:text-gray-300 placeholder:px-4"
                 placeholder="Adicionar uma tarefa"
                />
                <button className="flex justify-center items-center border-none h-full px-4 py-4 gap-[0.375rem] font-bold text-xs bg-blue-200 rounded-lg">
                  Criar
                  <AiOutlinePlusCircle size={20} />
                </button>
            </form>

        </header>
    )
}