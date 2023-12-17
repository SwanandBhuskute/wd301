import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import TaskCard from './TaskCard'
import './index.css'

function App() {
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="font-bold text-4xl">Smarter Tasks</h1>
        <p className='text-gray-600'><b>Project:</b> Graduation Final Year Project (Revamp College Website) </p>
      </div>
      <div className="flex justify-center mt-8">
        <div className="border p-4 rounded-xl">
          <h1 className="font-bold text-3xl mb-3 text-gray-700">Pending</h1>
          <TaskCard title="Build the website with static content" dueDate="10th April" assigneeName="Rohit S" isDone={false}/>
          <TaskCard title="Add a blog" dueDate="22nd March" assigneeName="Rohit M" isDone={false}/>
        </div>
        <div className="border p-4 rounded-xl ml-4">
          <h1 className="font-bold text-3xl mb-3 text-gray-700">Done</h1>
          <TaskCard title="Design the mockup" completedAtDate="10th April" assigneeName="Rohit M" isDone={true}/>
          <TaskCard title="Get the approval from principal" completedAtDate="20th April" assigneeName="Ajay S" isDone={true}/>
        </div>
      </div>
    </div>
  );
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
