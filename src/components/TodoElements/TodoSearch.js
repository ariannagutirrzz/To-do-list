import React from "react";

function TodoSearch() {

    const [searchValue, setValueSearch] = React.useState('');

    console.log('los usuarios escribieron ' + searchValue)


  return (<input placeholder="Ej: estudiar c++" 
  className="search"
  value={searchValue}
  onChange={(event) => { setValueSearch(event.target.value);  
  }}>

  </input>
  );
}
export { TodoSearch };
