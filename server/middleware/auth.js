import jwt from 'jsonwebtoken'


export const verifyToken = async (req, res, next) => {

    const token = req.headers?.auth_token
    if (!token) return res.status(401).json({ message: 'you need to login first!', success: false })

    jwt.verify(token, process.env.JWT_SECRET_KEY, (error, user) => {
        if (error) return res.status(403).json({ message: 'Invalid Token!', success: false })
        req.user = user
    })

    next()
}


export const userAuthorize = (req, res, next) => {
    verifyToken(req, res, () => {
        if ((String(req.user.id)) == String(req.params.id) || Boolean(req.user.isAdmin)) next()
        else return res.status(401).json({ message: 'User Authorization error!', success: false })
    })
}

export const adminAuthorize = (req, res, next) => {
    verifyToken(req, res, () => {
        // console.log(`req`, req.user)
        if (req.user.isAdmin) next()
        else return res.status(401).json({ message: 'Admin Authorization error!', success: false })
    })
}