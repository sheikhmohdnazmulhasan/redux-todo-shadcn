
import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./addTodoModal";
import FilterDropdown from "./filterDropdown";
import TodoCard from "./todoCard";
import { useGetTodosQuery } from "@/redux/api/api";

const TodoContainer = () => {
    const { todos } = useAppSelector(state => state.todos);

    const { data, isLoading, error } = useGetTojdosQuery(undefined);

    console.log('data');

    console.log('object');
    return (
        <div className="">
            <div className="flex justify-between mb-5">
                <AddTodoModal />
                <FilterDropdown />
            </div>
            <div className=" bg-gray-500 w-full h-full rounded-xl p-5 space-y-3">

                {todos.length ? todos.map((todo) => <TodoCard key={todo.id} isCompleted={todo.isCompleted} id={todo.id} title={todo.task} description={todo.description} />) : <p className="text-center font-semibold text-white">No Todo Available</p>}
            </div>
        </div>
    );
};

export default TodoContainer;