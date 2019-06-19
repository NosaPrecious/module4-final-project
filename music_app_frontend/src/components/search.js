import React from 'react'


const Search = (props) => {
  console.log(props.searchTerm)
  return(
    <div>{props.searchTerm}</div>
  );
}

export default Search
