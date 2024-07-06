import React, { useState, useEffect } from 'react';
import BookmarkList from './BookmarkList';
import AddBookmark from './AddBookmark';
import SearchBar from './SearchBar';
import { fetchBookmarks, addBookmark, searchBookmarks } from './api';

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    fetchBookmarks().then(setBookmarks);
  }, []);

  const handleAddBookmark = (bookmark) => {
    addBookmark(bookmark).then(newBookmark => {
      setBookmarks([...bookmarks, newBookmark]);
    });
  };

  const handleSearch = (query) => {
    searchBookmarks(query).then(setSearchResults);
  };

  return (
    <div>
      <h1>AI Contextual Bookmark Manager</h1>
      <SearchBar onSearch={handleSearch} />
      <AddBookmark onAdd={handleAddBookmark} />
      <BookmarkList bookmarks={searchResults.length > 0 ? searchResults : bookmarks} />
    </div>
  );
}

export default App;
