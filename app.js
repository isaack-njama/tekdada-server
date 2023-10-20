const express = require("express");
const app = express();

// Routes

const studentRoutes = require('./routes/api/studentRoutes');
app.use('/api', studentRoutes);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
