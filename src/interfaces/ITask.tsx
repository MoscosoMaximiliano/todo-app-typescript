export interface ITask {
  id: number
  description: string
  completed: boolean
}

export interface ITaskList {
  tasks: ITask[]
  IStateTask: (id: number) => void
  IDeleteTask: (id: number) => void
}

export interface ITaskItem {
  task: ITask
  IStateTask: (id: number) => void
  IDeleteTask: (id: number) => void
}
