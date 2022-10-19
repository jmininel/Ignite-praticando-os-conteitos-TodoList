import { VscTrash  } from 'react-icons/vsc'


export function TaskList() {
    return(
        <div className="flex w-full justify-around items-center gap-[0.75rem] mt-3 px-4 py-4 h[4.5rem] bg-gray-500 rounded-lg">
            <button className="border-none bg-none ">
                <div className=" border-2  border-blue-200 w-4 h-4 rounded-full"/>
            </button>
            <p className="flex justify-center items-center leading-[0.875rem] h-10 w-[39.5] text-sm text-gray-100 mr-auto">Integer urna interdum massa libero
                auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
            <button>
             <VscTrash size={18} className="bg-none border-none text-gray-300" />
            </button>    
        </div>
    )
}