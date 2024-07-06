document.getElementById('bookmarkForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const title = document.getElementById('title').value;
  const url = document.getElementById('url').value;

  fetch('http://localhost:3000/bookmarks', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title, url })
  }).then(response => response.json())
    .then(data => {
      console.log('Bookmark added:', data);
    });
});
