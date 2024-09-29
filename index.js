const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const routes = require('./routes/routes');

dotenv.config();

const app = express();

// Middleware untuk parsing JSON
app.use(bodyParser.json());

app.use('/api', routes);
// Jalankan server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});