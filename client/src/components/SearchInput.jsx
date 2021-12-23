import react from 'react';
import {debounce} from 'lodash';
import {Input} from "@mui/material";

const searchBox = `border: 10px`;


const SearchInput = (props)=>{

   const handleSearch = debounce(()=>{
      console.log()

   }, 1000)



   return (<div>
      <Input className={searchBox} onKeyUp={handleSearch}/>

   </div>)
}

export default SearchInput;
