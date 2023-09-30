import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAccountContext } from "../../context";
import "./SearchBar.style.scss";
import React from 'react';

function SearchBar({ searchTerm, onSearchTermChange }){
    const { loggedIn, logout } = useAccountContext();
    const navigate = useNavigate();
    
    const handleInputChange = (event) => {
        onSearchTermChange(event.target.value);
      };

      return (
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleInputChange}
          />
        </div>
      );
}

export default SearchBar;