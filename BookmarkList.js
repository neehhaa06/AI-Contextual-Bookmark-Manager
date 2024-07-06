import React from 'react';
import BookmarkItem from './BookmarkItem';

function BookmarkList({ bookmarks }) {
  return (
    <ul>
      {bookmarks.map(bookmark => (
        <BookmarkItem key={bookmark.id} bookmark={bookmark} />
      ))}
    </ul>
  );
}

export default BookmarkList;
