const express = require('express');
const fs = require('fs');
const pptxgen = require('pptxgenjs');

const app = express();
const port = 3000;

// Path to store uploaded PPT files
const pptFilesPath = './ppt_files/';

// Create the directory if it doesn't exist
if (!fs.existsSync(pptFilesPath)) {
  fs.mkdirSync(pptFilesPath);
}

// Middleware to handle file uploads
const multer = require('multer');
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, pptFilesPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

// Endpoint to upload PPT file
app.post('/upload', upload.single('pptFile'), (req, res) => {
  res.send('PPT file uploaded successfully!');
});

// Endpoint to read and respond with the PPT
app.get('/getPPT', (req, res) => {
  const pptFilePath = `${pptFilesPath}example.pptx`; // Change the filename as needed

  // Read the PPT file
  fs.readFile(pptFilePath, (err, data) => {
    if (err) {
      return res.status(500).send('Error reading the PPT file');
    }

    // Respond with the PPT file
    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.presentationml.presentation');
    res.setHeader('Content-Disposition', 'attachment; filename=example.pptx');
    res.send(data);
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
