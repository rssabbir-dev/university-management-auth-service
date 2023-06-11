import { RequestHandler } from 'express';
import { UserService } from './user.service';

const createUser: RequestHandler = async (req, res, next) => {
    const { user } = await req.body;
    try {
        const result = await UserService.createUser(user);
        res.status(200).json({
            success: true,
            message: 'User created successfully',
            data: result,
        });
    } catch (err) {
        next(err);
    }
};

export const UserController = {
    createUser,
};
