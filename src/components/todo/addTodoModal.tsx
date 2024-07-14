/* eslint-disable @typescript-eslint/no-unused-vars */
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { useState } from 'react';
import { useAddTodoMutation } from '@/redux/api/api';
// import { useAppDispatch } from '@/redux/hook';
// import { addTodo } from '@/redux/features/todoSlice';

const AddTodoModal = () => {
    const [task, setTask] = useState('');
    const [description, setDescription] = useState('');
    // const dispatch = useAppDispatch();

    const [addTodo, { data, isError, isLoading, isSuccess }] = useAddTodoMutation();

    console.log('log from todo model =>', { data, isError, isLoading, isSuccess });

    //! for local
    // function handleAddTodo() {

    //     if (!task || !description) {
    //         alert('Please type task and description');
    //         return;
    //     }

    //     const id = Math.random().toString(36).substring(2);

    //     dispatch(addTodo({ task, description, id, isCompleted: false }));

    // }

    //! for Server
    function handleAddTodo() {

        if (!task || !description) {
            alert('Please type task and description');
            return;
        }

        const id = Math.random().toString(36).substring(2);

        const data = { task, description, id, isCompleted: false };

        addTodo(data);

    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-gray-600">Add Todo</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Add Task</DialogTitle>
                    <DialogDescription>
                        Add your task that you want to finish.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="task" className="text-right">Task</Label>
                        <Input onBlur={(e) => setTask(e.target.value)} id="task" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="description" className="text-right">Description</Label>
                        <Input onBlur={(e) => setDescription(e.target.value)} id="description" className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button onClick={handleAddTodo}>Save changes</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default AddTodoModal;