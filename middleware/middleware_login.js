
const middlewareLoging = (req, res, next) => {
           if(req.headers.authorization === req.session.views)
           {
             next(); 
           }
       else{
            res.json({"Error":true,"Token":"Try aagin ? error Token not correct."})
          }
    };
  const middlewarelogOut = (req, res, next) => {
  if(req.headers.authorization === req.session.views)
      {
        req.session.destroy(function(err) {
          next();
        })
      }
  else{
       res.json({"Error":true,"Token":"Try aagin ? error Token not correct."})
     }
};  
module.exports.middlewareLoging=middlewareLoging;
module.exports.middlewarelogOut=middlewarelogOut; 