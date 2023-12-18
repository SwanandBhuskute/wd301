import React from 'react';
import './TaskCard.css'  


interface TaskCardProps {
    title: string;
    dueDate: string;
    completedAtDate: string;
    assigneeName: string;
    isDone: boolean;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
    let text = "";
    if (props.isDone == true) {
        text = `Completed on: ${props.completedAtDate}`;
    } 
    else if(props.isDone == false) {
        text = `Due on: ${props.dueDate}`;
    }
    return (
        <div className='TaskItem'>
            <h2 className="text-xl font-bold">{props.title}</h2>
            <p>{text}</p>
            <p>Assignee: {props.assigneeName}</p>
        </div>
    )
}

export default TaskCard