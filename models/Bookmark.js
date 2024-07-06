const mongoose = require('mongoose');

const BookmarkSchema = new mongoose.Schema({
  title: String,
  url: String,
  tags: [String],
  summary: String,
}, {
  timestamps: true,
});

BookmarkSchema.index({ title: 'text', summary: 'text', tags: 'text' });

module.exports = mongoose.model('Bookmark', BookmarkSchema);
