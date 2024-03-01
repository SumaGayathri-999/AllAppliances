import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaSearch } from "react-icons/fa";

function SearchInput({filter,setFilter}) {
  return (
    <div className="search_container">
      <div className="input_cont">
        <input type="search"  value={filter} onChange={(e)=>{setFilter(e.target.value)}}/>
        <div className="input_cont__icon">
          <FaSearch />
        </div>
      </div>

    </div>
  );
}

export default SearchInput;

