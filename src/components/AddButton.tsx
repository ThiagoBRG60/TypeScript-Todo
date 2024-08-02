import StyledButtonDiv from "../styles/AddButton.styled"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faCheck } from "@fortawesome/free-solid-svg-icons";
import { useTasks } from "./Todo";

const AddButton = () => {
  const {active, setActive, inputValue, setInputValue, setTasks} = useTasks()

  function handleAddTask() {
    setActive(prev => !prev)
    inputValue !== '' && setTasks(prev => [...prev, inputValue])
    setInputValue('')
  }

  function handleInput(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  return (
    <StyledButtonDiv>
      {active && <input value={inputValue} onChange={handleInput} type="text" name="task" placeholder="Write your task here..."/>}
      <button onClick={handleAddTask}>
        {active ? <FontAwesomeIcon icon={faCheck}/> : <FontAwesomeIcon icon={faAdd}/>}
      </button>
    </StyledButtonDiv>
  )
}

export default AddButton