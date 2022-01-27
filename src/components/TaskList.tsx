import { ITaskList } from '../interfaces/ITask'
import TaskCard from './TaskCard'

const TaskList = ({ tasks, IStateTask, IDeleteTask }: ITaskList) => {
  return (
    <div className="">
      {tasks.map(task => {
        return (
          <TaskCard
            task={task}
            IStateTask={IStateTask}
            IDeleteTask={IDeleteTask}
          />
        )
      })}
    </div>
  )
}

export default TaskList
