const express = require('express');
const axios = require('axios');
const app = express();
app.use(express.json());

app.post('/get-contacts', async (req, res) => {
  try {
    const firebaseUrl = 'https://mh-testing-e738d-default-rtdb.firebaseio.com/authorized_users.json'; // Replace with your actual Firebase URL
    const response = await axios.get(firebaseUrl);
    res.json(response.data);
  } catch (err) {
    res.status(500).send('Error retrieving data');
  }
});

app.listen(3000, () => {
  console.log('Proxy server running on port 3000');
});
