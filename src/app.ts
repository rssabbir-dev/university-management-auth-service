import cors from 'cors';
import express, { Application, NextFunction, Request, Response } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import usersRouter from './app/modules/users/users.route';
const app: Application = express();

// using cors
app.use(cors());
// using body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// use usersRouter
app.use('/api/v1/users', usersRouter);

//testing
app.get('/', (req: Request, res: Response, next: NextFunction) => {
    next('You are an error!');
});

app.use(globalErrorHandler);

export default app;
