import {Router} from 'express';
import { info } from '../domain/userController.js'
// import validarPermisos from '../../Auth/domain/permisosRoles.js'


const appUser = Router();
// appUser.use()
/**
 * ! GET
 */
appUser.get('/info',info)



export default appUser;