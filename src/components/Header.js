import React from "react";

import { Link } from 'react-router-dom';

export default function Header1() {
  return (
    <header className="ui centered">
      <h1 className="ui center">Rick &amp; Morty Fan Page</h1>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/character-list">Character List</Link>
        </div>
    </header>
  );
}
