const express = require('express');
const app = express();

app.use(express.static('public'));

app.get('/admin', (req, res) => {
  res.sendFile(__dirname + '/public/admin.html');
});

app.get('/admin/dashboard', (req, res) => {
  res.sendFile(__dirname + '/public/admin-dashboard.html');
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
