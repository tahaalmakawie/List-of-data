import React, {useState} from "react";
const FilterInput = ({filteration}) => {
    const [filter, setFilter] = useState("")
    const filterHandler = (e) => {
        let name = e.target.value 
        setFilter(name)
        filteration(name)
    }
    return(
        <div style={{marginBottom: "20px"}}>
            <input type="text" 
            placeholder='for test ref' 
            value={filter}
            onChange = {filterHandler}
            />
        </div>
    )
}

export default FilterInput