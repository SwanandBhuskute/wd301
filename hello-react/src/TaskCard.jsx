import './TaskCard.css'

const TaskCard = (props) => {
    let text = '';
    if (props.isDone) {
        text = `Completed on: ${props.completedAtDate}`;
    } else {
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