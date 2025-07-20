declare enum NodeEnv {
    TEST = "test",
    DEV = "development"
}
interface Env {
    env: NodeEnv;
    dbFilename: string;
    dbTestFilename: string;
    knexDebug: boolean;
    port: number;
    defaultPage: number;
    defaultPageSize: number;
}
export declare const config: Env;
export {};
