export interface AppEnv {
    DATABASE_URL: string;
    PORT: string;
}
export declare function loadEnv(): AppEnv;
export type HonoEnv = {
    Bindings: AppEnv;
};
export declare const env: AppEnv;
//# sourceMappingURL=env.d.ts.map