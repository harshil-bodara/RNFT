const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');

app.use(cors())
app.use(express.json())

process.env.NODE_ENV = 'production'

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('risked_nft/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'risked_nft', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 9997;

app.listen(port, () => console.log(`Listening on port ${port}`));