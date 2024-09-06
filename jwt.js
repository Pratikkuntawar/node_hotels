const jwt=require('jsonwebtoken')
//function to verify token and passses token to the server
const jwtAuthMiddleware=(req,res,next)=>{

    const authorization=req.headers.authorization
    if(!authorization){
        return res.status(401).json({error:"Token not found"})
    }
    //exterct the jwt token from request header
    const token=req.headers.authorization.split(' ')[1];
    if(!token){
        return res.status(401).json({error:"unauthorised"})
    }
    try{
        //verifying the jwt token
        const decoded=jwt.verify(token,process.env.JWT_SECRET);
        //attach information to the req object
        req.user=decoded
        next()
    }
    catch(err){
        console.log(err);
        res.status(401).json({error:"invalid token"})
    }
}
//function to generate  token
const generateToken=(userData)=>{
    // generate a jwt token using a user data
    return jwt.sign(userData,process.env.JWT_SECRET);
}

module.exports={jwtAuthMiddleware,generateToken}