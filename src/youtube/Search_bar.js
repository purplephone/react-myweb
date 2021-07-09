import React from 'react';
import './Search_bar.css'

function Search_bar(props){
    return(
        <div className="search_bar">
            <input className="search_input" type="text"></input>
            <button className="search_button">검색</button>
        </div>
    )
}

export default Search_bar