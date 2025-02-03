import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import { IoAddOutline } from "react-icons/io5";
import TodoCard from './components/TodoCard';
import { SignedIn, SignedOut, SignInButton, UserButton, useUser, useAuth } from "@clerk/clerk-react";
import todoLogo from "./assets/todo-logo.png"

const firebaseURL = 'https://todosapp-a98d5-default-rtdb.asia-southeast1.firebasedatabase.app/'

const App = () => {

  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  const {user} = useUser()
  const {isSignedIn} = useAuth()
  
  let [addTask, setAddTask] = useState(false)
  let [todos, setTodos] = useState([])

  let taskInput = useRef(null)
  let dueDateInput = useRef(null)

  const newTaskHandler = () => {
    setAddTask(true)
  }

  const submitHandler = (e) => {

    if(taskInput.current.value === '' || dueDateInput.current.value === ''){
      alert('Please fill all the fields')
      return
    }

    let task = taskInput.current.value
    console.log(task)
    let dueDate = new Date(dueDateInput.current.value).toLocaleDateString('en-US', options)
    axios.post(`${firebaseURL}tasks.json`, {
      title: task,
      dueDate: dueDate,
      createdBy: user.username,
    }).then(()=>{
      taskInput.current.value = ''
      dueDateInput.current.value = '' 
      fetchTodos()
      setAddTask(false)  
    })
  }

  const fetchTodos = () =>{
    axios.get(`${firebaseURL}tasks.json`).then((todos)=>{
      let tempTodos = [];
      for(let key in todos.data){
        let todo = {
          id: key,
          ...todos.data[key]
        }
        tempTodos.push(todo)
      }
      setTodos(tempTodos)
    })
  }
  
  useEffect(()=>{
    fetchTodos()
  },[])

  const deleteTask = (id) => {
    axios.delete(`${firebaseURL}tasks/${id}.json`).then(()=>{
      fetchTodos()
    })
  }


  return (
    <div>
      <div className="bg-blue-600">
        <div className="max-w-7xl flex justify-between items-center mx-auto py-3 px-5">
          <a href=""><img src={todoLogo} className='h-8 cursor-pointer' alt="" /></a>
          <h1 className='hidden md:block md:text-lg text-sm text-white'>What you do today can improve all your tomorrows.</h1>
          <header>
            <SignedOut>
              <SignInButton className='text-xl font-semibold text-white hover:border-b hover:border-yellow-300'/>
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </header>
        </div>
      </div>
      <SignedIn>
        {/* <div className="w-full bg-blue-600 text-white text-center p-3">
          <h1 className='text-lg'>What you do today can improve all your tomorrows.</h1>
        </div> */}

        <div className="w-full flex justify-center items-center mt-8">
          <div className="w-96 md:w-[450px] p-3">
            <h1 className='text-2xl font-bold'>Manage your tasks <span className='text-gray-600 font-bold'>@{isSignedIn ? user.fullName : ""}</span></h1>
            <p className='text-justify mt-2'>Every big accomplishment is made up of small, consistent efforts. Your to-do list isn’t just a list—it’s the foundation of your dreams.</p>
          </div>
        </div>

        
        {
          (!addTask) 
          ? "" 
          :
          <div className="w-full flex justify-center items-center">
            <div className="w-96 md:w-[450px] p-3">
              <div className="flex gap-5 items-center">
                  <input ref={taskInput} className='w-[89%] border border-gray-300 outline-none focus:border-2 focus:border-blue-400 p-3 rounded-lg' type="text" placeholder='Add tasks here ( i.e Learn ReactJS )'/>
                  <input ref={dueDateInput} className='w-[11%] border outline-none p-3 rounded-xl' type="date" name="" id="" />
              </div>
                <button onClick={submitHandler} className='w-full mt-3 bg-black text-white py-3 px-5 rounded-xl'>Add Task</button>
            </div>
          </div>
        }

        {
          todos.filter(todo => isSignedIn ? todo.createdBy == user.username : "").map(todo => <TodoCard key={todo.id} id={todo.id} title={todo.title} dueDate={todo.dueDate} deleteTask={deleteTask}/>)
        }


        <div onClick={newTaskHandler} className="w-16 h-16 absolute bottom-5 right-5 md:bottom-16 md:right-16 flex justify-center items-center"> 
          <div className="p-2 border rounded-full bg-black hover:w-14 hover:h-14 flex justify-center items-center cursor-pointer">  
            <IoAddOutline className='text-white text-3xl hover:text-4xl'/>
          </div>
        </div>
      </SignedIn>
      <SignedOut>
        <div className="w-full flex justify-center items-center mt-32">
          <div className="max-w-5xl p-3 text-center">
            <h1 className='text-4xl font-bold'>Stay Ahead. Plan Your Day. Conquer Your Goals</h1>
            <p className='text-2xl mt-2 font-extralight'>The world's #1 To-Do List, empowering millions to achieve their goals with ease and precision.</p>
            <p className='mt-5'>Click here to <SignInButton className='border-b border-gray-400'/> ?</p>
          </div>
        </div>
      </SignedOut>
    </div>
  )
}

export default App