import TodoCard from "./todoCard";

const TodoContainer = () => {
    return (
        <div className="">
            <div className="">
                <button>Add Todo</button>
                <button>Filter</button>
            </div>
            <div className=" bg-red-500 w-full h-full rounded-xl p-5 space-y-3">
                {/* <p className="text-center font-semibold text-white">No Todo Available</p> */}

                <TodoCard />
                <TodoCard />
                <TodoCard />
            </div>
        </div>
    );
};

export default TodoContainer;