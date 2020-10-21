export interface LoggerConfig {
  level: string;
}

export const config: LoggerConfig = {
  level: process.env.LOG_LEVEL || 'error',
};
