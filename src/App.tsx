import React, { useEffect, useState } from 'react'
import './App.css'
import { FaBeer } from 'react-icons/fa'
import { ITask } from './interfaces/ITask'
import TaskList from './components/TaskList'
import TaskFormInput from './components/TaskFormInput'

const App: React.FC = () => {
  const [tasks, setTasks] = useState<ITask[]>([])

  const AddTask = (description: string): void => {
    console.log(description)
    let id: number = tasks.length
    const newListTasks: ITask[] = [
      ...tasks,
      {
        id,
        description,
        completed: false
      }
    ]
    setTasks(newListTasks)
  }

  const StateTask = (i: number): void => {
    let newTasksList: ITask[] = [...tasks]
    console.log(i)
    newTasksList[i].completed = !newTasksList[i].completed
    setTasks(newTasksList)
  }

  const DeleteTask = (i: number): void =>
    setTasks(tasks.filter(task => task.id !== i))

  return (
    <div className='grid justify-content place-items-center content-center place-content-center h-auto bg-primaryBackground'>
      <TaskFormInput AddNewTask={AddTask} />
      <TaskList tasks={tasks} IStateTask={StateTask} IDeleteTask={DeleteTask} />
    </div>
  )
}

export default App
