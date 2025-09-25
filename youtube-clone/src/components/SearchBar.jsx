import React, { useState } from 'react';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onSubmit = (event) => {
    event.preventDefault(); 
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field">
          <label htmlFor="search-input">Video Search</label>
          <input
            id="search-input"
            type="text"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Search for videos..."
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;