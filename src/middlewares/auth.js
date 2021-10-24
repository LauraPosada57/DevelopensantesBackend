const {web} = require('../../config/google.json')
const {OAuth2Client} = require('google-auth-library');
const User = require("../model/user.model");
const client = new OAuth2Client(web.client_id)

const admins = [
    'alexhc718@gmail.com'
]


exports.verifyUser = async function (req, res, next) {
    const {tokenId} = req.body
    try {
        const ticket = await client.verifyIdToken({
                idToken: tokenId,
                audience: web.client_id
            }
        )
        const payload = ticket.getPayload();
        const {email_verified, sub: id_user, name, picture: imageUrl, email } = payload;
        let role = 'client'
        if (admins.includes(email)){
            role = 'admin'
        }

        if(email_verified){
            User.find(id_user, (err, user) => {
                if(user){
                    res.locals.id_user = id_user
                    next()
                }else{
                    const newUser = {}
                    Object.assign(newUser, {name, imageUrl, id_user, email, role})
                    User.create(newUser, (err, createdUser) => {
                        console.log(createdUser)
                        res.locals.id_user = id_user
                        next()
                    })
                }
            })
        }else{
            let err = new Error('No estas autorizado para esta operación')
            err.status = 403
            next(err);
        }
    }catch (e){
        console.log(e)
        let err = new Error('No estas autorizado para esta operación')
        err.status = 403
        next(err);
    }

}

exports.verifyAdmin = function (req,res,next){
    const id_user = res.locals.id_user
    User.find(id_user, (err, user) => {
        const role = user.role
        if(role === 'admin') {
            res.locals.id_user = id_user
            next()
        }else{
            let err = new Error('No estas autorizado para esta operación')
            err.status = 403
            next(err);
        }
    });
}
