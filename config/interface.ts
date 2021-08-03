export type EnvKey = "SENTRY_AUTH" | "NODE_ENV" | "APP_NAME";
export type Environment = "production" | "development" | "test";


export type IEnv = {
  [key in EnvKey]: string;
}
