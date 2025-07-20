import objection from 'objection';
declare const _default: {
    development: {
        connection: {
            filename: string;
        };
        useNullAsDefault: boolean;
        wrapIdentifier(identifier: string, origWrap: objection.Identity<string>): string;
        postProcessResponse(response: any): any;
        client: string;
        migrations: {
            tableName: string;
            directory: string;
        };
        seeds: {
            directory: string;
        };
    };
    test: {
        connection: {
            filename: string;
        };
        useNullAsDefault: boolean;
        wrapIdentifier(identifier: string, origWrap: objection.Identity<string>): string;
        postProcessResponse(response: any): any;
        client: string;
        migrations: {
            tableName: string;
            directory: string;
        };
        seeds: {
            directory: string;
        };
    };
};
export default _default;
