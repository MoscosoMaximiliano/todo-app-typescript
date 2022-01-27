import { useState } from 'react'
import { ITask } from '../interfaces/ITask'
import {BsPen} from "react-icons/bs"

type FormElement = React.FormEvent<HTMLFormElement>

interface Props {
  AddNewTask: (description: string) => void
}

const TaskFormInput = (props: Props) => {
  const [newTask, setNewTask] = useState<string>('')

  const HandleSubmit = (e: FormElement) => {
    e.preventDefault()
    if(newTask.length > 0) {
      props.AddNewTask(newTask)
      setNewTask('')
    }
  }

  return (
    <form onSubmit={HandleSubmit} action='' method='post'>
      <div className='grid grid-rows-2 p-4 drop-shadow-md bg-secondaryBackground rounded-lg'>
        <input
          className='rounded mb-4 p-4 w-auto'
          type='text'
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button
          className='inline-flex items-center justify-center h-10 px-5 transition-colors duration-150 bg-success rounded-lg focus:shadow-outline hover:bg-successHover'
          type='submit'
        >
          Submit <BsPen className='ml-4'/>
        </button>
      </div>
    </form>
  )
}

export default TaskFormInput
