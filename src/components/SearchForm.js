import React, { useState, useEffect } from "react";

const SearchForm = props => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState(characters);
  useEffect(() => {}, [searchTerm]);

  const handleChange = event => {
    setSearchTerm(event.target.value);

    const results = characters.filter(character => {
      return character.name.toLowerCase().includes(searchTerm.toLowerCase());
    });
    setSearchResults(results);
  };

  console.log("search term", searchTerm);

  return (
    <div className="App">
      <p>{searchTerm}</p>
      <form>
        <label htmlFor="name">Search:</label>
        <input
          id="name"
          type="text"
          name="textfield"
          placeholder="Search"
          onChange={handleChange}
          value={searchTerm}
        />
      </form>
      <div className="character-list">
        <ul>
          {searchResults.map(char => {
            return <li key={char}>{char}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default SearchForm;
