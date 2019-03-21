import React from 'react';

const SearchBar = (props) => {
  return (
    <form >
      <label>
        City:
          <input type="text"
          value={props.value}
          onChange={props.handleChange}
        />
      </label>
      <button
        onClick={props.handleClick}
      >
        Search
            </button>
    </form>
  )
}

export default SearchBar
