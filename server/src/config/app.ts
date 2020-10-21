export type Environment = 'local' | 'test' | 'staging' | 'production';

export interface AppConfig {
  environment: Environment;
  name: string;
  port: number;
  rateLimit: boolean;
}

export const config: AppConfig = {
  environment: (process.env.NODE_ENV || 'local') as Environment,
  name: process.env.APP_NAME || '',
  port: Number(process.env.PORT) || 3000,
  rateLimit: process.env.RATE_LIMIT !== 'true',
};
