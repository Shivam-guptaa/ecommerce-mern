const {Strategy : JwtStrategy, ExtractJwt} = require("passport-jwt");
const {User} = require("../models/index");
const config = require("./config");

const jwtOptions = {
    secretOrKey  : config.jwt.secret,
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken()
}

const jwtVerify = async (payload,done) =>{
   try {
    const user = await User.findById(payload.sub);
    if(!user){
        return done(null,false)
    }
    done(null,user)
   } catch (error) {
    done(error,false)
   }
}

const jwtStrategy = new JwtStrategy(jwtOptions,jwtVerify)

module.exports = {
    jwtStrategy,
}