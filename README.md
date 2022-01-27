# How I worked on this project

In this particular project I decide to use [***Typescript***](https://www.typescriptlang.org/docs/handbook/react.html) for learn about it.

For the core of the app i work on ___develop___ branch and on future updates its necessary to make a new branch and make a **PR** for add to the ___develop___ branch and finally push it to ___master___

### Why a Todo-App?

Because these have all i need to learn the basis of ***Typescript***

- Life cycle of objects
- Create of interfaces
- Type structure code

# How to navigate this project 

All start on [**App.tsx**](https://github.com/MoscosoMaximiliano/todo-app-typescript/blob/develop/src/App.tsx) the variable [tasks](https://github.com/MoscosoMaximiliano/todo-app-typescript/blob/develop/src/App.tsx#L11) i where we going to store all the tasks

After this we got the components.
- [TaskFormInput](https://github.com/MoscosoMaximiliano/todo-app-typescript/blob/develop/src/components/TaskFormInput.tsx) where we got the form to add a new task, this requires a prop, in this case a function, this is [AddTask](https://github.com/MoscosoMaximiliano/todo-app-typescript/blob/develop/src/App.tsx#L11) who we going to add the task to the tasks variable
- [TaskList](https://github.com/MoscosoMaximiliano/todo-app-typescript/blob/develop/src/components/TaskList.tsx) this component take all tasks and make a map for display individually the task using the [TaskCard](https://github.com/MoscosoMaximiliano/todo-app-typescript/blob/develop/src/components/TaskCard.tsx)


All these components are using the interfaces where we can found on the [ITask](https://github.com/MoscosoMaximiliano/todo-app-typescript/blob/develop/src/interfaces/ITask.tsx) file

# Why I built the project this way

I try to reach the best performance and the isolation of the components to make the most modular possible meanwhile I'm learning about ***Typescript***

# If I had more time I would change or add this: 

- A better style of the app
- drag and drop system
- More feedback
- localStorage for not loss the tasks

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Libraries used
- [ReactJS](https://es.reactjs.org/)
- [Tailwind](https://tailwindcss.com/)
- [react-icons](https://react-icons.github.io/react-icons/)
