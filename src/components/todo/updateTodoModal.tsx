import { useState } from "react";
import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useAppDispatch } from "@/redux/hook";
import { updateTodo } from "@/redux/features/todoSlice";

interface TTodoProps {
    title: string;
    description: string;
    id: string;
}

const UpdateTodoModal = ({ title, description, id, }: TTodoProps) => {
    const [task, setTask] = useState('');
    const [UpdatedDescription, setUpdateDescription] = useState('');
    const dispatch = useAppDispatch()

    function handleUpdateTodo() {
        const updatedDoc: { task: string, description: string; id: string } = { task: task ? task : title, description: UpdatedDescription ? UpdatedDescription : description, id: id };

        dispatch(updateTodo(updatedDoc));

    }
    

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-green-600 hover:bg-green-700 transition-all">
                    <svg className="size-5" fill="none" strokeWidth="1.5" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"></path>
                    </svg>
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Update Task</DialogTitle>
                    <DialogDescription>
                        Update your task that you want to finish.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="task" className="text-right">Task</Label>
                        <Input defaultValue={title} onBlur={(e) => setTask(e.target.value)} id="task" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">Description</Label>
                        <Input defaultValue={description} onBlur={(e) => setUpdateDescription(e.target.value)} id="description" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={handleUpdateTodo}>Save changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default UpdateTodoModal;