
import AddTodoModal from "./addTodoModal";
import FilterDropdown from "./filterDropdown";
import TodoCard from "./todoCard";

const TodoContainer = () => {
    return (
        <div className="">
            <div className="flex justify-between mb-5">
                <AddTodoModal />
                <FilterDropdown />
            </div>
            <div className=" bg-gray-500 w-full h-full rounded-xl p-5 space-y-3">
                {/* <p className="text-center font-semibold text-white">No Todo Available</p> */}

                <TodoCard />
                <TodoCard />
                <TodoCard />
            </div>
        </div>
    );
};

export default TodoContainer;