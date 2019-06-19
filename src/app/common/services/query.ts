export interface Query {
    _id: string,
    sgbd: string,
    query: string,
    line: string,
    source: string,
    message: string,
    file: string,
    application_name: string,
    func: string,
    timestamp: string,
    score: number,
    oraReturns:{
        sgbd: string,
        date: string,
        isApproved: boolean,
        message: string,
        _id: string
    },
    mssqlReturns:{
        sgbd: string,
        date: string,
        isApproved: boolean,
        message: string,
        _id: string
    },
    postReturns:{
        sgbd: string,
        date: string,
        isApproved: boolean,
        message: string,
        _id: string
    },
    __v: number
}