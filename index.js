const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRouter = require('./routes/users');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use('/api', usersRouter);

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
