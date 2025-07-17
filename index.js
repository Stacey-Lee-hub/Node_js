const express = require('express');
const app = express();
const employeeRoutes = require('./routes/employeeRoutes');

app.use(express.json());

app.use('/employees', employeeRoutes);

const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));