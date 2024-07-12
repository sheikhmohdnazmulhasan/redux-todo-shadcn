
const TodoCard = () => {
    return (
        <div className="bg-white flex justify-between items-center p-3 rounded-md">
            <input type="checkbox" name="" id="" />
            <h1>Todo Title</h1>
            <p>time</p>
            <p>Description</p>
            <div className="flex gap-4">
                <p>edit</p>
                <p>del</p>
            </div>
        </div>
    );
};

export default TodoCard;