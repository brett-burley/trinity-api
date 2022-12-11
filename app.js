const express = require('express');
//const cors = require('cors');
//const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const app = express();
const port = 5555 | process.env.PORT;

// middleware
//app.use(cors());
app.use(cookieParser());
app.use(express.json());
//app.use(morgan('common'));

// routes
app.use(express.static('public'));
app.use('/', (req, res) => res.send('main route'));
//app.use('/speech', require('./routes/speech/'));


app.listen(port, () => console.log(`Prod Server listening on port: ${port}`));
