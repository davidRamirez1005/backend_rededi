// import {con} from '../../config/app/atlas.js'

const info = async(req, res) =>{
    res.send({
        name : "User",
        description : "This is the user domain",
        version : "1.0.0"
    });
}

export { info }