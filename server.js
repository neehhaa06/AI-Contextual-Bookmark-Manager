const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Bookmark = require('./models/Bookmark');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/bookmarks', { useNewUrlParser: true, useUnifiedTopology: true });

app.get('/bookmarks', async (req, res) => {
  const bookmarks = await Bookmark.find();
  res.json(bookmarks);
});

app.post('/bookmarks', async (req, res) => {
  const bookmark = new Bookmark(req.body);
  await bookmark.save();
  res.json(bookmark);
});

app.get('/bookmarks/search', async (req, res) => {
  const { query } = req.query;
  const bookmarks = await Bookmark.find({ $text: { $search: query } });
  res.json(bookmarks);
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
