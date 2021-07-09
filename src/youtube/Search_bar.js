import React from 'react';
import './Search_bar.css'

const Search_bar=({input, onChange, onSearch, onKeyPress})=>{
    return(
        <div className="search_bar">
            <input className="search_input" value={input} onChange={onChange} onKeyPress={onKeyPress}></input>
            <button className="search_button" onClick={onSearch}>검색</button>
        </div>
    )
}

export default Search_bar