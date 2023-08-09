const express = require('express');
const app = express();
const path = require('path');

// Serve static files from the 'public' directory
app.use(express.static('public', {
  extensions: ['html', 'js'],
  index: false,
  setHeaders: (res, path, stat) => {
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  }
}));

// Route to serve the admin login page
app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'admin.html'));
});

// Route to serve the admin dashboard page
app.get('/admin-dashboard', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public', 'admin-dashboard.html'));
});

// Start the server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
