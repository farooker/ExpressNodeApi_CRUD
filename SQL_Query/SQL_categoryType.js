function  Sql_GetAll()
{
    var query ="SELECT * FROM `categories_type`,categories WHERE categories_type.categories_id = categories.categories_id ";
    return query;
}
function  Sql_GetById(id)
{
    var query ="SELECT * FROM `categories_type`,categories WHERE categories_type.categories_id = categories.categories_id and categories.categories_id='"+id+"'";
    return query;
    
}
module.exports.Sql_GetAll  = Sql_GetAll;
module.exports.Sql_GetById = Sql_GetById;