export interface TestQuery {
    query: string,
    sgbds: {
        oracle: Boolean,
        mssql: Boolean,
        postgres: Boolean
    },
    method:{
        advpl: Boolean,
        database: Boolean
    }    
}