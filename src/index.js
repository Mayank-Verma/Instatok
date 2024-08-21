import express from 'express';
import  postRoutes from './routes/postRoutes.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middlewares/errorHandler.js';

const app = express();
app.use(express.json());
// Routes
app.use('/api/v1',postRoutes );
app.use('/api/v1', userRoutes);

// Error Handling Middleware
app.use(errorHandler);

export default app;


