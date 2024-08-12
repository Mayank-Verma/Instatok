import express from 'express';
import uploadRoutes from './routes/uploadRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();

// Routes
app.use('/api/v1', uploadRoutes);

// Error Handling Middleware
app.use(errorHandler);

const PORT = process.env.PORT;
app.listen(PORT, (err) => {
  if (err) console.log(err);
  else console.log(`Server is running smoothly on port ${PORT}`);
});
