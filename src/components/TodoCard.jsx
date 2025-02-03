import { useState } from "react";
import { GoTrash } from "react-icons/go";

function TodoCard({key, title, dueDate, id, deleteTask}) {
    let [deleteStatus, setDeleteStatus] = useState(false)

    const deleteStatusHandler = ()=>{
        setDeleteStatus(true)
        deleteTask(id)
    }
    return(
        <>
            <div className="w-full flex justify-center mt-15">
                <div className="w-[450px] py-3 px-3">
                    <div className="flex justify-between items-center border rounded-2xl py-3 px-5 shadow">
                        <div className="">
                            <h1 className="text-lg text-blue-700 cursor-pointer">{title}</h1>
                            <p className="mt-1 text-sm text-gray-500"><span className="italic text-black">Due-Date : </span>{dueDate}</p>
                        </div>
                        {
                            (!deleteStatus) ? <GoTrash onClick={deleteStatusHandler} className="text-xl hover:text-red-600 cursor-pointer"/> : <div className="loader"></div>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default TodoCard;