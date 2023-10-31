const express = require('express');

const app = express();
const PORT = 3001;

app.listen(PORT, () => {
    console.log('aaplication successfully listening to http://localhost:${PORT}');
}).catch((err) => {
    console.log(err);

});