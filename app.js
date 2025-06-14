const express = require('express');
const app = express();

// Serve static files from the 'public' folder
app.use(express.static('public'));

app.listen(3000, () => {
    console.log('App running on http://localhost:3000');
});
