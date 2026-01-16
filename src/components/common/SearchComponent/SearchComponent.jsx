import { useRef, useEffect } from "react";
import { useState } from "react";
import useDebounce from "../../../hooks/UseDebounce";
import './SearchComponent.css'

const SearchComponent = ({onSearch, placeholder ="Search..."}) => {
    const [searchTerm, setSearchTerm] = useState("");
    const inputRef = useRef(null);
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const handleSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    const handleChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleClear = () => {
        setSearchTerm('');
        onSearch('')
        inputRef.current?.focus()
    };

    useEffect(() => {
        onSearch(debouncedSearchTerm);
    }, [debouncedSearchTerm]);


    return (
        <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-bar__container">
        {/* Search Icon */}
        <svg 
          className="search-bar__icon" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
          />
        </svg>

        {/* Input Field */}
        <input
          ref={inputRef}
          type="text"
          className="search-bar__input"
          placeholder={placeholder}
          value={searchTerm}
          onChange={handleChange}
          aria-label="Search blogs"
        />

        {/* Clear Button (only show when there's text) */}
        {searchTerm && (
          <button
            type="button"
            className="search-bar__clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            ✕
          </button>
        )}
      </div>
    </form>
    )
}

export default SearchComponent;
