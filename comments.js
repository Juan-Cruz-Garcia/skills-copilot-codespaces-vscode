// Create web server
const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('public'));
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
// Create a route for GET requests
app.get('/comments', (req, res) => {
  // Send a response
  res.send('This is a GET request');
});
app.post('/comments', (req, res) => {
  res.send('This is a POST request');
});
app.put('/comments', (req, res) => {
  res.send('This is a PUT request');
});
app.delete('/comments', (req, res) => {
  res.send('This is a DELETE request');
});