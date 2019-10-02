function  Sql_GetAll()
{
    var query ="SELECT * FROM `product`";
    return query;
}
function  Sql_GetById(id)
{
    var query ="SELECT * FROM `product` WHERE product_id='"+id+"'";
    return query;
    
}
function  Sql_GetCategoryTypeById(id)
{
    var query ="SELECT * FROM `product` WHERE categories_type_id='"+id+"'";
    return query;
    
}
module.exports.Sql_GetAll  = Sql_GetAll;
module.exports.Sql_GetById = Sql_GetById;
module.exports.Sql_GetCategoryTypeById=Sql_GetCategoryTypeById;