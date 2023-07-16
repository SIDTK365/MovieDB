import React, { useState } from 'react';
import Search from './component/Search/Search';
import Trending from './component/Trending/Trending';
import Footer from './component/Footer/Footer';

function App() {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showComponentB, setShowComponentB] = useState(false);

  const toggleState = () => {
    setShowComponentB(!showComponentB);
  };

  const handleSearch = async () => {
    setShowComponentB(true);
    try {
      const response = await fetch(`http://localhost:8080/api/search?query=${query}`);
      const data = await response.json();
      setSearchResults(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div class="py-6 px-6 max-w-2xl mx-auto">
        <div>
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
          <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" id="default-search" class="block p-4 pl-10 w-full text-sm rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="Search Movies" />
            <button onClick={handleSearch} class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </div>
      </div>
      {showComponentB ? (
        <Search searchResults={searchResults} showComponentB={showComponentB} toggleState={toggleState} />
      ) : (
        <div>
          <Trending/>
        </div>
      )}
      <Footer/>
    </>
  );
}

export default App;