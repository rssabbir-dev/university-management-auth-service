import config from '../../../config';
import ApiError from '../../../errors/ApiError';
import { IUser } from './users.interface';
import { User } from './users.model';
import { generateUserId } from './users.utils';

const createUser = async (user: IUser): Promise<IUser | null> => {
    /** TODO:
     * auth generated incremental id
     * default password
     **/
    const id = await generateUserId();
    user.id = id;
    if (!user.password) {
        user.password = config.default_user_pass as string;
    }
    const createdUser = await User.create(user);
    if (!createdUser) throw new ApiError(400, 'Failed to create new user');
    return createdUser;
};

export default {
    createUser,
};
