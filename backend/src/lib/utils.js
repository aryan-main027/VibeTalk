import jwt from "jsonwebtoken";

export const generateToken = (userId,res)=>{
  // create a token
  const token = jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn : "1d"
  })
  // node -e "console.log(require('crypto').randomBytes(64).toString('hex'))" -> secret kwy genwrator

  res.cookie('jwt',token,{
    maxAge : 1*24*60*60*1000,
    httpOnly : true,
    sameSite : "strict",
    secure : process.env.NODE_ENV === "development" ? false : true,
  })

  return token;
}