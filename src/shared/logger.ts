import path from 'path';
import DailyRotateFile from 'winston-daily-rotate-file';

import { createLogger, format, transports } from 'winston';
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
    const date = new Date(timestamp);
    const [hour, minute, seconds] = [
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
    ];
    return `${date.toDateString()} ${hour}:${minute}:${seconds} [${label}] ${level}: ${message}`;
});

export const logger = createLogger({
    level: 'info',
    format: combine(label({ label: 'UM' }), timestamp(), myFormat),
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: path.join(
                process.cwd(),
                'logs',
                'winston',
                'successes',
                'um-%DATE%-success.log'
            ),
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
    ],
});
export const errorLogger = createLogger({
    level: 'error',
    format: combine(label({ label: 'UM' }), timestamp(), myFormat),
    transports: [
        new transports.Console(),
        new DailyRotateFile({
            filename: path.join(
                process.cwd(),
                'logs',
                'winston',
                'errors',
                'um-%DATE%-error.log'
            ),
            datePattern: 'YYYY-MM-DD-HH',
            zippedArchive: true,
            maxSize: '20m',
            maxFiles: '14d',
        }),
    ],
});
