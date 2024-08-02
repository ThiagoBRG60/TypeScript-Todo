import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import {StyledCategoryButton, StyledCustomIcon, StyledIcon} from "../styles/CategoryButton.styled";
import { useTasks } from "./Todo";
import { useState } from "react";

const CategoryButton = () => {
   const { tasks, setFilteredTasks, completed } = useTasks()
   const [category, setCategory] = useState('All')

   function handleCategory(e: React.ChangeEvent<HTMLSelectElement>) {
      const selectedCategory = e.target.value
      setCategory(selectedCategory)

      switch (selectedCategory) {
         case 'All':
            setFilteredTasks(tasks)
            break;
         case 'Pending':
            setFilteredTasks(tasks.filter((_, index) => !completed[index]))
            break;
         case 'Completed':
            setFilteredTasks(tasks.filter((_, index) => completed[index]))
            break;
      }
   }

  return (
   <StyledCustomIcon>
      <StyledCategoryButton  value={category} onChange={(e) => handleCategory(e)} id="category" name="category">
         <option value="All">All</option>
         <option value="Pending">Pending</option>
         <option value="Completed">Completed</option>
      </StyledCategoryButton>
      <StyledIcon icon={faChevronDown} />
   </StyledCustomIcon>
  )
}

export default CategoryButton