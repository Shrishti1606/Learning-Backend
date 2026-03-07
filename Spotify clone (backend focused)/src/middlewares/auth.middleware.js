const jwt = require('jsonwebtoken');

const authArtist = async (req, res, next) => {

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({ message: 'Unauthorized' });
    }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        if(decoded.role != 'artist'){
            return res.status(403).json({
                message: 'Forbidden: Only artists can create music'
            })
        }

        req.user = decoded; // Attach the decoded token to the request object for later use

        next(); 

    }catch(err){
        return res.status(500).json({
            // message: err.message,
            message: 'Unauthorized'

        });
    }    
}

const authUser = async (req, res, next) => {

    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({ 
            message: 'Unauthorized' 
        });
    }

    try{

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        if(decoded.role != 'user'){
            return res.status(403).json({
                message: 'Forbidden: Only users can access this resource'   
            });
        }


    }catch(err){

        return res.status(500).json({
            // message: err.message,
            message: 'Unauthorized'
        });

    }
}

module.exports = { authArtist, authUser };