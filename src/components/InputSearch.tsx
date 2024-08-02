import {StyledInput, StyledInputLabel, LabelInputIcon,} from "../styles/InputSearch.styled";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useTasks } from "./Todo";
import { useEffect, useState } from "react";

const InputSearch = () => {
   const [searchValue, setSearchValue] = useState('')
   const { tasks, setFilteredTasks } = useTasks()

   useEffect(() => {
      const filteredTasks = tasks.filter((task) => task.toLowerCase().includes(searchValue.toLowerCase()))
      setFilteredTasks(filteredTasks)
   }, [searchValue, tasks, setFilteredTasks])

   function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
      setSearchValue(e.target.value)
   }

  return (
   <>
      <StyledInputLabel htmlFor="search">
         <LabelInputIcon icon={faMagnifyingGlass} />
      </StyledInputLabel>
      <StyledInput onChange={handleSearch} value={searchValue} type="text" placeholder="Search note..." id="search" name="search"/>
   </>
  )
}

export default InputSearch