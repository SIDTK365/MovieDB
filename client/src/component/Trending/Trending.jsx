import React, { useState, useEffect } from 'react'
import './Trending.css'
import Card from '../Card/Card';

const Trending = () => {
    const [searchResults, setSearchResults] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8080/api/trending') // Replace with your API endpoint
            .then(response => response.json())
            .then(searchResults => setSearchResults(searchResults))
            .catch(error => console.log(error));
    }, []);

    return (
        <>
            <Card searchResults={searchResults} />
        </>

    )
}

export default Trending