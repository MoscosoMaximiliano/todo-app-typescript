import React, { Dispatch, SetStateAction } from 'react'

import { ITaskItem } from '../interfaces/ITask'

const TaskCard = ({ task, IStateTask, IDeleteTask }: ITaskItem) => {
  console.log(task)
  return (
    <div
      key={task.id}
      className='grid grid-cols-3 justify-content content-center rounded mx-auto h-auto w-auto bg-secondaryBackground p-2 m-2'
    >
      <input
        type='checkbox'
        name=''
        id=''
        onClick={() => IStateTask(task.id)}
      />
      <h1>{task.description}</h1>
      <p>completed: {task.completed.toString()}</p>
      <button className='bg-error' onClick={() => IDeleteTask(task.id)}>
        Delete
      </button>
    </div>
  )
}

export default TaskCard
