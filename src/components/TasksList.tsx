import { StyledTasksList } from "../styles/TasksList.styled"
import { useTasks } from "./Todo"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck, faTrashCan } from "@fortawesome/free-solid-svg-icons"

const TasksList = () => {
   const { tasks, setTasks, filteredTasks, setFilteredTasks, completed, setCompleted } = useTasks()

   function handleComplete(task: string, event: React.MouseEvent) {
      event.stopPropagation()
      const index = tasks.indexOf(task)
      setCompleted(prev => {
         const newCompleted = [...prev];
         newCompleted[index] = !newCompleted[index]
         return newCompleted
      })
   }

   function handleRemoveTasks(task: string) {
      const filteredAllTasks = tasks.filter((t) => t !== task)
      setTasks(filteredAllTasks)

      const filteredFilteredTasks = filteredTasks.filter(t => t !== task)
      setFilteredTasks(filteredFilteredTasks)
   }

  return (   
   <StyledTasksList>
      {filteredTasks.map((task) => {
         const index = tasks.indexOf(task)         
         return (
            <li key={crypto.randomUUID()}>
               <div>
                  <span className={completed[index] ? 'active' : ''} onClick={(e) => handleComplete(task, e)}>
                     {completed[index] ? <FontAwesomeIcon icon={faCheck}/> : null}
                  </span>
                  <p className={completed[index] ? 'finished' : ''} onClick={(e) => handleComplete(task, e)}>{task}</p>
               </div>
               <span onClick={() => handleRemoveTasks(task)}>
                  {<FontAwesomeIcon icon={faTrashCan}/>}
               </span>
            </li>
         )
      })}
   </StyledTasksList>
  )
}

export default TasksList