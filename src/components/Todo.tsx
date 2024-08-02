import StyledTodo from "../styles/Todo.styled";
import StyledButtonsDiv from "../styles/StyledButtonsDiv";
import InputSearch from "./InputSearch";
import CategoryButton from "./CategoryButton";
import ThemeButton from "./ThemeButton";
import TasksList from "./TasksList";
import AddButton from "./AddButton";
import { useState, createContext, useContext } from "react";

interface TasksTypes {
  active: boolean
  setActive: React.Dispatch<React.SetStateAction<boolean>>
  inputValue: string
  setInputValue: React.Dispatch<React.SetStateAction<string>>
  tasks: string[]
  setTasks: React.Dispatch<React.SetStateAction<string[]>>
  filteredTasks: string[]
  setFilteredTasks: React.Dispatch<React.SetStateAction<string[]>>
  completed: boolean[]
  setCompleted: React.Dispatch<React.SetStateAction<boolean[]>>
}

const TasksContext = createContext<TasksTypes | undefined>(undefined)

export function useTasks() {
  const context = useContext(TasksContext)
  if (context === undefined) {
    throw new Error('useTasks must be used within a TasksProvider')
  }
  return context
}

const Todo = () => {
  const [active, setActive] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const [tasks, setTasks] = useState<string[]>([])
  const [filteredTasks, setFilteredTasks] = useState<string[]>([])
  const [completed, setCompleted] = useState<boolean[]>([])

  return (
    <TasksContext.Provider 
      value={{active, setActive, inputValue, setInputValue, tasks, setTasks, 
              filteredTasks, setFilteredTasks, completed, setCompleted}}>
      <StyledTodo>
        <h1>TODO LIST</h1>
        <StyledButtonsDiv>
          <InputSearch/>
          <div>
            <CategoryButton/>
            <ThemeButton/>
          </div>
        </StyledButtonsDiv>
        <TasksList/>
        <AddButton/>
      </StyledTodo>
    </TasksContext.Provider>
  );
};

export default Todo;