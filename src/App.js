import Contents from "./components/Contents";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import React, { useState } from 'react';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = (query) => {
        setSearchQuery(query);
        setCategory('');
    };

    const handleCategorySelect = (category) => {
        setCategory(category);
        setSearchQuery('');
    };
  return (
    <>
      
      <div>
      <Navbar onSearch={handleSearch} onSelectCategory={handleCategorySelect} />
      <Contents searchQuery={searchQuery} category={category} />
      </div>
    </>
  );
}

export default App;
