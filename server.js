const express = require('express');
const app = express();



require('./startup/mids')(app)
require('./routes')(app)
app.listen(process.env.PORT || 5000);