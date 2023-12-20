import React from "react";
import { TaskItem } from "./types";

interface TaskFormProps {
  addTask: (task: TaskItem) => void;
}

interface TaskFormState {
    title: string;
    dueDate: string;
    description: string;
}
  

class TaskForm extends React.Component<TaskFormProps, TaskFormState> {
    constructor(props: TaskFormProps) {
        super(props);
        this.state = {
            title: "",
            description: "",
            dueDate: "",
        }
    }
  
    addTask: React.FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();
        const { title, description, dueDate } = this.state;

        // Checking if title and due date are not empty before adding task
        if (title.trim() !== "" && dueDate.trim() !== "") {
            const newTask = {
                title,
                description,
                dueDate,
            };
            this.props.addTask(newTask);
            this.setState({ title: "", description: "", dueDate:"" });
        } else {
            alert("Please enter all fields");
        }
    };

    inputRef = React.createRef<HTMLInputElement>();

    titleChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        console.log(typeof event.target.value); 
        this.setState({ title: event.target.value });
    };

    descriptionChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        console.log(`${event.target.value}`);
        console.log(typeof event.target.value); 
        this.setState({ description: event.target.value});
    }
    
    dueDateChanged: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        // const dateString = event.target.value;
        // const dateObject = dateString ? new Date(dateString) : new Date(); 
        console.log(`${event.target.value}`);
        console.log(typeof event.target.value); 
        this.setState({ dueDate: event.target.value });
    };

    render(){
      return (
        <form onSubmit={this.addTask}>
            <input type="text" id="todoTitle" className="w-full p-2 border border-black rounded mb-2" value={this.state.title} onChange={this.titleChanged} placeholder="Title"/>
            <input type="text" id="todoDescription" className="w-full p-2 border border-black rounded mb-2" value={this.state.description} onChange={this.descriptionChanged} placeholder="Description"/>
            {/* <label htmlFor="todoDueDate" className="flex text-gray-700 mb-2 block">
                DueDate 
            </label> */}
            <input type="date" id="todoDueDate" className="w-full p-2 border border-black rounded mb-4" value={this.state.dueDate} onChange={this.dueDateChanged} placeholder="Due Date"/>
            <button type="submit" id="addTaskButton" className="w-full bg-blue-500 text-white py-2 px-4 rounded">Add item</button>
        </form>
      )
    }
}

export default TaskForm;