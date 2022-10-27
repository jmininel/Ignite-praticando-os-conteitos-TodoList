import { VscTrash  } from 'react-icons/vsc';
import { ITasks } from '../../App';
import { BsFillCheckCircleFill, BsCircle  } from 'react-icons/bs'

interface Props {
  task: ITasks;
  onDelete: (taskId: string) => void;
  onComplete: (taskId: string) => void;
}

export function TaskList({task, onDelete, onComplete }: Props) {
  
    return(
        <div className="flex w-full justify-around items-center gap-[0.75rem] mt-3 px-4 py-4 h[4.5rem] bg-gray-500 rounded-lg">
            <button onClick={() => onComplete(task.id)} className="border-none bg-none">
                <div />
                {task.isCompleted ?  <BsFillCheckCircleFill className='fill-purple-200 line-through '/> :  <BsCircle className='fill-gray-300'/>  }
            </button>
            <p className="flex justify-center items-center leading-[0.875rem] h-10 w-[39.5] text-sm text-gray-100 mr-auto">
              {task.title &&  
                  (
                   (task.isCompleted ? <p className="line-through">{task.title}</p> : <p>{task.title}</p>) 

                     ) 
              
              }
              
            </p>
            <button onClick={() => onDelete(task.id)}>
             <VscTrash size={18} className="bg-none border-none text-gray-300" />
            </button>    
        </div>
    )
}