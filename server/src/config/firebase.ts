export interface FirebaseConfig {
  clientEmail: string;
  databaseUrl: string;
  privateKey: string;
  projectId: string;
}

export const config: FirebaseConfig = {
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL || '',
  databaseUrl: process.env.FIREBASE_DATABASE_URL || '',
  privateKey: process.env.FIREBASE_PRIVATE_KEY || '',
  projectId: process.env.FIREBASE_PROJECT_ID || '',
};

Object.keys(config).forEach((key) => {
  if (!config[key]) {
    throw new Error(`process.env.${key} required`);
  }
});
