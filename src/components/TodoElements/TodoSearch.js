import React from "react";

function TodoSearch({
  searchValue,
  setValueSearch,
}) {
   

  return (

  <input placeholder="Ej: estudiar c++" 
  className="search"
  value={searchValue}
  onChange={(event) => { setValueSearch(event.target.value);  
  }}>

  </input>
  );
}
export { TodoSearch };
