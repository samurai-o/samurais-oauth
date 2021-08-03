export type EnvKey = "SENTRY_AUTH" | "NODE_ENV";
export type Environment = "production" | "development" | "test";


export type IEnv = {
    [key in EnvKey]: string;
}