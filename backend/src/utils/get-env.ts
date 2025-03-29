import { StringifyOptions } from "querystring";

export const getEnv = (key: string, defaultValue: string = ""): string => {
  const env = process.env[key];
  if (env === undefined) {
    if (defaultValue) {
      throw new Error(`Environment variable ${key} is not set`);
    }
    return defaultValue;
  }
  return env;
};
