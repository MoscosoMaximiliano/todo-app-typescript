import React, { Dispatch, SetStateAction } from 'react'

import { ITaskItem } from '../interfaces/ITask'

const TaskCard = ({ task, IStateTask, IDeleteTask }: ITaskItem) => {
  console.log(task)
  return (
    <div
      key={task.id}
      className={task.completed ? 'grid grid-cols-12 justify-content items-center rounded  bg-success p-2 m-2'
                : 'grid grid-cols-12 justify-content content-center rounded bg-secondaryBackground p-2 m-2'}
    >
      <input
        type='checkbox'
        className='justify-content col-span-1 h-8 w-8 rounded self-center'
        onClick={() => IStateTask(task.id)}
      />
      <p className={task.completed ? "break-all col-span-10 text-center text-lg text-inherit" : "break-all col-span-10 text-center text-lg text-textColor"}>{task.description}</p>
      <button className='bg-error rounded col-span-1' onClick={() => IDeleteTask(task.id)}>
        Delete
      </button>
    </div>
  )
}

export default TaskCard
