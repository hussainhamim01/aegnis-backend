import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(express.json());

// Test Endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Backend is working 🚀' });
});

app.listen(process.env.PORT || 5000, () => {
  console.log(
    `🚀 Server running on http://localhost:${process.env.PORT || 5000}`
  );
});
