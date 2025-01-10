// import axios from 'axios';
// import React, { useRef, useState } from 'react'
// import { IoAddOutline } from "react-icons/io5";

// const firebaseURL = 'https://todosapp-a98d5-default-rtdb.asia-southeast1.firebasedatabase.app/'

// const App = () => {

//   const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'long',
//     day: 'numeric',
//   };
  
//   // let [addTask, setAddTask] = useState(false)
//   let taskInput = useRef(null)
//   // let dueDateInput = useRef(null)

//   // const newTaskHandler = () => {
//   //   setAddTask(true)
//   // }

//   const submitHandler = () => {
//     let task = taskInput.current.value
//     console.log(task)
//     // let dueDate = new Date(dueDateInput.current.value).toLocaleDateString('en-US', options)
//     axios.post(`${firebaseURL}tasks.json`, {
//       title: task
//     })
//   }
  
//   return (
//     <div>
//       <div className="w-full bg-blue-600 text-white text-center p-3">
//         <h1 className='text-lg'>What you do today can improve all your tomorrows.</h1>
//       </div>

//       <div className="w-full flex justify-center items-center mt-8">
//         <div className="w-96 md:w-[450px] p-3">
//           <h1 className='text-2xl font-bold'>Manage your tasks <span className='text-gray-600 font-bold'>@Saichandran</span></h1>
//           <p className='text-justify mt-2'>Every big accomplishment is made up of small, consistent efforts. Your to-do list isn’t just a list—it’s the foundation of your dreams.</p>
//         </div>
//       </div>

//       <div className="w-full flex justify-center items-center">
//           <div className="w-96 md:w-[450px] p-3">
//               <input ref={taskInput} className='w-full border border-gray-300 outline-none focus:border-2 focus:border-blue-400 p-3 rounded' type="text" placeholder='Add tasks here ( i.e Learn ReactJS )'/>
//               {/* <input ref={dueDateInput} className='mt-3 border outline-none p-3 rounded' type="date" name="" id="" /> */}
//               <button onClick={submitHandler} className='ml-5 mt-3 bg-black text-white py-3 px-5 rounded'>Add Task</button>
//           </div>
//         </div>

//       {/* {
//         (!addTask) 
//         ? "" 
//         :
//         <div className="w-full flex justify-center items-center">
//           <div className="w-96 md:w-[450px] p-3">
//             <form action="" >
//               <input ref={taskInput} className='w-full border border-gray-300 outline-none focus:border-2 focus:border-blue-400 p-3 rounded' type="text" placeholder='Add tasks here ( i.e Learn ReactJS )'/>
//               <input ref={dueDateInput} className='mt-3 border outline-none p-3 rounded' type="date" name="" id="" />
//               <button onClick={submitHandler} className='ml-5 mt-3 bg-black text-white py-3 px-5 rounded'>Add Task</button>
//             </form>
//           </div>
//         </div>
//       } */}

//       {/* <div onClick={newTaskHandler} className="w-16 h-16 absolute bottom-5 right-5 md:bottom-16 md:right-16 flex justify-center items-center"> 
//         <div className="p-2 border rounded-full bg-black hover:w-14 hover:h-14 flex justify-center items-center cursor-pointer">  
//           <IoAddOutline className='text-white text-3xl hover:text-4xl'/>
//         </div>
//       </div> */}
//     </div>
//   )
// }

// export default App










// import axios from 'axios';
// import { useRef } from 'react'

// const firebaseUrl = "https://todosapp-a98d5-default-rtdb.asia-southeast1.firebasedatabase.app/";

// function App() {
//   let taskInput = useRef(null)
  
//   function handleSubmit() {
//     let task = taskInput.current.value
//     axios.post(`${firebaseUrl}tasks.json`, {
//       title: task
//     })
//   }

//   return (
//     <>
//       <div className="w-full flex justify-center items-center mt-8">
//         <div className="w-96 md:w-[450px] p-3">
//           <h1 className='text-2xl font-bold'>Manage your tasks <span className='text-gray-600 font-bold'>@Saichandran</span></h1>
//           <p className='text-justify mt-2'>Every big accomplishment is made up of small, consistent efforts. Your to-do list isn’t just a list—it’s the foundation of your dreams.</p>
//           <input ref={taskInput} className='mt-5 w-full border border-gray-300 outline-none focus:border-2 focus:border-blue-400 p-3 rounded-xl' type="text" placeholder='Add tasks here ( i.e Learn ReactJS )'/>
//           <button onClick={handleSubmit} className='mt-2 px-5 py-3 bg-black text-white rounded-xl'>Add Task</button>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App
