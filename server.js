const express = require('express');
const app = express();

// test get API
app.get('/', (req, res) => res.send('API Running Successfully....'))

// PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));

