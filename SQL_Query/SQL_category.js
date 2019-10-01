function  Sql_GetAll()
{
    var query ="SELECT * FROM `categories`";
    return query;
}
function  Sql_GetById(id)
{
    var query ="SELECT * FROM `categories` WHERE categories_id='"+id+"'";
    return query;
    
}
function  Sql_insert(id,name,picture)
{
    var query ="INSERT INTO `categories`(`categories_id`, `categories_name`, `categories_picture`) VALUES ('"+id+"','"+name+"','"+picture+"')";
    return query;
}
function  Sql_update()
{

    
}
function  Sql_delete()
{

    
}
module.exports.Sql_GetAll  = Sql_GetAll;
module.exports.Sql_GetById = Sql_GetById;
module.exports.Sql_insert  = Sql_insert;
module.exports.Sql_update  = Sql_update;
module.exports.Sql_delete  = Sql_delete;
