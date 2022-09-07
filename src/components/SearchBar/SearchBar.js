import React from 'react'
import searchBarImage from '../img/unsplash_SGT-CqR5TGE.png';
import "./SearchBar.css";
import SearchBarComponent from './SearchBarComponent';
import { useState } from "react";
import axios from "axios";

const SearchBar = () => {

    const [state, setState] = useState([]);

    const onSearch = async (query) => {
        // e.preventDefault();
        try {
            const results = await axios.post("http://localhost:4000/search-result", {
                query: query,
            })
            console.log(query)
            const data = results.data;
            return setState(data.webPages.value);

        } catch (error) {
            console.log(error);
        }

    };

    return (
        <>
            <header className='search-bar-container'>
                <div className='search-bar-text' ><h1>How can we help you with your car insurance?</h1></div>
                <img className='search-bar-background' src={searchBarImage} alt="road"></img>
                <SearchBarComponent onSearch={onSearch} ></SearchBarComponent>
            </header>

            <div className="search-bar-result-list">
                {state.map((item) => (
                    <div className="search-bar-result-card" key={item.id}>
                        <span><p></p>{item.snippet}</span>
                        <br />
                        <a href={item.displayUrl} target="_blank" rel="noopener noreferrer">{item.displayUrl}</a>
                    </div>
                ))}
            </div>
        </>
    )
}

export default SearchBar
