import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import TaskCard from './TaskCard'


function App() {
  return (
    <div>
      <div>
        <h1>Smarter Tasks</h1>
        <p><b>Project:</b> Graduation Final Year Project (Revamp College Website) </p>
        <h1>Pending</h1>
        <TaskCard title="Task 3" dueDate="10th April" assigneeName="Rohit S" isDone={false}/>
        <TaskCard title="Task 4" dueDate="22nd March" assigneeName="Rohit M" isDone={false}/>
      </div>
      <div>
        <h1>Done</h1>
        <TaskCard title="Task 1" completedAtDate="10th April" assigneeName="Rohit M" isDone={true}/>
        <TaskCard title="Task 2" completedAtDate="20th April" assigneeName="Ajay S" isDone={true}/>
      </div>
    </div>
  )
}


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }
export default App
