// import passport from '../../Auth/app/passportService.js';
// import { generateToken } from '../../Auth/infraestructure/jwt/generateJwt.js';
import appUser from "../../controllers/user/app/user.js"


export function routesRepository(nameExpress) {
    nameExpress.use('/user', appUser)
    // nameExpress.use('/cita', passport.authenticate('bearer', { session: false }), appCitas)
}

