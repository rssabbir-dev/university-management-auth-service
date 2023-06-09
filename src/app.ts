import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import { UserRoutes } from './app/modules/users/user.route';
const app: Application = express();

// using cors
app.use(cors());
// using body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use usersRouter
app.use('/api/v1/users', UserRoutes);

//testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//     res.send('hello');
// });

app.use(globalErrorHandler);

export default app;
