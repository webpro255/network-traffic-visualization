/**
 * This Node.js script sets up a web server using Express.js to handle file uploads,
 * process them with a Python script, and serve the results to a client for visualization.
 *
 * - Express.js: A web server framework used to handle HTTP requests and serve your application.
 * - Multer: A middleware that handles file uploads and stores them in the `uploads/` directory.
 * - Python Script Execution: The `exec` function runs the `parse_pcap.py` Python script,
 *   which processes the uploaded file and returns the parsed data as JSON.
 * - Serving the Client: Static files (like `index.html`) are served from the `public` directory,
 *   and the server listens on `localhost:3000`.
 */

const express = require('express');
const multer = require('multer');
const { exec } = require('child_process');
const path = require('path');
const app = express();

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('pcap'), (req, res) => {
    console.log('File received:', req.file);

    const filePath = req.file.path;

    exec(`python3 parse_pcap.py ${filePath}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error.message}`);
            res.status(500).send('Error processing file');
            return;
        }
        if (stderr) {
            console.error(`Python script stderr: ${stderr}`);
            res.status(500).send('Error processing file');
            return;
        }

        console.log('Python script output:', stdout);

        // Send the JSON data back to the client
        res.json(JSON.parse(stdout));
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
