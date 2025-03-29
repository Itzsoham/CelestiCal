import { getEnv } from "../utils/get-env";

const appConfig = () => ({
  PORT: getEnv("PORT", "8000"),
  NODE_ENV: getEnv("NODE_ENV", "development"),
  BASE_PATH: getEnv("BASE_PATH", "/api"),

  DATABASE_URL: getEnv("DATABASE_URL"),

  JWR_SECRET: getEnv("JWR_SECRET", "secret_jwt"),
  JWR_EXPIRATION: getEnv("JWR_EXPIRATION", "1h"),

  GOOGLE_CLIENT_ID: getEnv("GOOGLE_CLIENT_ID"),
  GOOGLE_CLIENT_SECRET: getEnv("GOOGLE_CLIENT_SECRET"),
  GOOGLE_REDIRECT_URI: getEnv("GOOGLE_REDIRECT_URI"),

  FRONTEND_ORIGIN: getEnv("FRONTEND_ORIGIN", "http://localhost:5173"),
  FRONTEND_INTEGRATION_URL: getEnv("FRONTEND_INTEGRATION_URL"),
});

export const config = appConfig();
