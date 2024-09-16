
function auth (req, res, next){
    const token = req.headers.token || "";
    if (token == ""){
        res.status(404).json({msg : "Token is not provided"});
    }
    else{
        next();
    }
}

module.exports = {auth};