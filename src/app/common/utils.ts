export const parseQuery = (query:string) => {
    let newQuery

    newQuery = query.replace(/,/g, " \n,");
    newQuery = newQuery.replace(/FROM/g, " \nFROM");
    newQuery = newQuery.replace(/WHERE/g, " \nWHERE");
    newQuery = newQuery.replace(/ORDER/g, " \nORDER");
    newQuery = newQuery.replace(/GROUP/g, " \nGROUP");
    
    if(/SELECT\w*/g.test(query)){
        console.log(true);
    }else{
        console.log(false);
    }
    return newQuery
}
