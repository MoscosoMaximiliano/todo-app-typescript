import { useState } from 'react'
import { ITask } from '../interfaces/ITask'

type FormElement = React.FormEvent<HTMLFormElement>

interface Props {
  AddNewTask: (description: string) => void
}

const TaskFormInput = (props: Props) => {
  const [newTask, setNewTask] = useState<string>('')

  const HandleSubmit = (e: FormElement) => {
    e.preventDefault()
    props.AddNewTask(newTask)
    setNewTask('')
  }

  return (
    <form onSubmit={HandleSubmit} action='' method='post'>
      <div className='grid grid-rows-2 p-2 bg-secondaryBackground rounded m-10'>
        <input
          className='border-2 rounded border-yellow-500 mb-8'
          type='text'
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button
          className='bg-success border-none rounded hover:bg-green-300'
          type='submit'
        >
          Submit
        </button>
      </div>
    </form>
  )
}

export default TaskFormInput
