import TodoContainer from "@/components/todo/todoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
    return (
        <Container>
            <div>
                <h1 className="text-2xl font-bold text-center py-10">My todos</h1>
                <TodoContainer />
            </div>
        </Container>
    );
};

export default Todo;