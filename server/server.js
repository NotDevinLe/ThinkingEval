const express = require('express');
const path = require('path');

const app = express();

// Use static files from the project root (go one level up)
app.use(express.static(path.join(__dirname, '..')));

// Serve the HTML file from the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
