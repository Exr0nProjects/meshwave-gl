const express = require('express');
const app = express();

const PORT = 8030;

app.get('/', (_, res) => {
    console.log("got /");
    res.sendFile(__dirname + '/src/index.html');
});

app.use('/wilderness/meta', express.static(__dirname + "/src"));

app.listen(PORT, () => { console.log(`listening on port ${PORT}!`) });

