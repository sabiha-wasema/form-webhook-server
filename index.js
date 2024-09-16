const express = require('express');
const app = express()
const cors = require('cors');
const port = process.env.PORT || 5000;



app.get('/', (req, res) => {
    res.send('form webhook server is running')
  })
  
  app.listen(port, () => {
    console.log(`form webhook app listening on port ${port}`)
  })