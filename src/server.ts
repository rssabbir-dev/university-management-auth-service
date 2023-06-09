import mongoose from 'mongoose';
import app from './app';
import config from './config/index';
import { errorLogger, logger } from './shared/logger';

async function bootstrap() {
    try {
        await mongoose.connect(config.database_url as string);
        logger.info(`🖥️ Database connection successful`);
        app.listen(config.port, () => {
            logger.info(`Application listening on port ${config.port}`);
        });
    } catch (err) {
        errorLogger.error(`Failed to connect database ${err}`);
    }
}

bootstrap();
