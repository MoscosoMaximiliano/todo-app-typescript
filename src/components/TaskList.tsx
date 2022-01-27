import { ITaskList } from '../interfaces/ITask'
import TaskCard from './TaskCard'

const TaskList = ({ tasks, IStateTask, IDeleteTask }: ITaskList) => {
  return (
    <>
      {tasks.map(task => {
        return (
          <TaskCard
            task={task}
            IStateTask={IStateTask}
            IDeleteTask={IDeleteTask}
          />
        )
      })}
    </>
  )
}

export default TaskList
