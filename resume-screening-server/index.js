// server/index.js

const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

// Allow frontend requests
app.use(cors());

// Store uploaded files in 'uploads' folder
const upload = multer({ dest: 'uploads/' });

// Upload endpoint
app.post('/upload-resume', upload.single('resume'), (req, res) => {
  res.send('Resume uploaded successfully!');
});

// Server start
app.listen(port, () => {
  console.log(`✅ Server started on http://localhost:${port}`);
});


