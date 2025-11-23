const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
const adminRoutes = require('./routes/adminRoutes');

// ROUTES
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
app.use('/admin', adminRoutes);

// ✔ Halaman utama (Generate API Key)
app.get('/', (req, res) => {
  res.sendFile('index.html', { root: './public/html' });
});

// Start server
app.listen(port, () => console.log(`🚀 Server running at http://localhost:${port}`));
