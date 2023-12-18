import React from 'react';
import './TaskCard.css'  


interface TaskCardProps {
    title: string;
    dueDate: string;
    completedAtDate: string;
    assigneeName: string;
}

const TaskCard: React.FC<TaskCardProps> = (props) => {
    let text = '';
    if (props.completedAtDate.length != 0) {
        text = `Completed on: ${props.completedAtDate}`;
    } 
    if(props.dueDate.length != 0) {
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