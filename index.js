const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 2806;

require('./server/model/_db');

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/dist/'));

app.set('view engine', 'html');

require('./server/route')(app);

app.listen(PORT, () => { console.log( `express server started at PORT : ${PORT}` ); });
