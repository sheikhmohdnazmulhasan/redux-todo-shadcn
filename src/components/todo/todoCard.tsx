import { useAppDispatch } from "@/redux/hook";
import { Button } from "../ui/button";
import { removeTodo, toggleIsCompleted } from "@/redux/features/todoSlice";
import UpdateTodoModal from "./updateTodoModal";

interface TTodoProps {
    title: string;
    description: string;
    id: string;
    isCompleted: boolean
}

const TodoCard = ({ title, description, id, isCompleted }: TTodoProps) => {
    const dispatch = useAppDispatch();

    function handleToggleState() {
        dispatch(toggleIsCompleted(id))
    }

    return (
        <div className="bg-white flex justify-between items-center p-3 rounded-md">
            <input onChange={handleToggleState} type="checkbox" name="" id="" />
            <h1>{title}</h1>
            {/* <p>time</p> */}
            {isCompleted ? <p className="text-green-500">Done</p> : <p className="text-red-500">Pending</p>}
            <p>{description}</p>
            <div className="flex gap-4">
                <UpdateTodoModal description={description} id={id} title={title} />

                <Button onClick={() => dispatch(removeTodo(id))} className="bg-red-500 hover:bg-red-600 transition-all">
                    <svg className="size-5" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"></path>
                    </svg>
                </Button>
            </div>
        </div>
    );
};

export default TodoCard;