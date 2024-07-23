import jwt from 'jsonwebtoken';


const authMiddleware = (req , res , next) =>{
    const {token} = req.headers;

    if(!token){
        return res.json({success : false , message : "Faculty Not Authentcated Login Again"});
    }
    try {
        const token_decode = jwt.verify(token , process.env.JWT_KEY);
        req.body.email = token_decode.email;
        next();
    } catch (error) {
        console.log(error);
        res.json({success : false , message : "Error in Login"});
    }
}

export {authMiddleware}