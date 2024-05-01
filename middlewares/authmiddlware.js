const JWT=require('jsonwebtoken')

module.exports=(req,res,next)=>{
    try {
        const token=req.headers["authorization"].split(" ")[1]
        JWT.verify(token,process.env.JWT_SECRET,(err,decode)=>{
            if(err){
                return res.status(401).sond({
                    success:false,
                    message:"Un- Authrized User"
                })
            }
            else{
                req.body.id=decode.id;

                next();
            }
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            message:"Please provide Auth token",
            error,
        })
    }
}
