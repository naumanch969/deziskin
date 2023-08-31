import User from '../models/user.js'
import bcrypt from 'bcryptjs'
import validator from 'validator'
import jwt from 'jsonwebtoken'

// Get All Users
export const getAllUsers = async (req, res) => {
    try {
        const query = req.query.new
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find()

        return res.status(200).json({ result: users, message: 'users fetched successfully!', success: true })
    } catch (error) {
        console.log(`error = \n`, error)
        res.status(404).json({ message: 'error in register - controllers/user.js', error, success: false })
    }
}

// Get User
export const getUser = async (req, res) => {
    try {
        const { userId } = req.params
        const findedUser = await User.findById(userId)
        if (!findedUser) return res.status(400).json({ message: 'user not exist', success: false })

        const { password, ...others } = findedUser._doc;
        return res.status(200).json({ result: { ...others }, message: 'user fetched successfully', success: true })
    } catch (error) {
        console.log(`error = \n`, error)
        res.status(404).json({ message: 'error in getUser - controllers/user.js', error, success: false })
    }
}

// Get user stats
export const getUserStats = async (req, res) => {
    try {
        const date = new Date()
        const lastYear = new Date(date.setFullYear(date.getFullYear() - 1))
        const data = await User.find()
        // const data = await User.aggregate([
        // { $match: { createdAt: { $gte: lastYear } } },
        // { $project: { month: { $month: "$createdAt" } } },
        // { $group: { _id: "$month", total: { $sum: 1 } } }
        // ])
        res.status(200).json({ result: data, success: true, message: 'stats get successfully' })
    } catch (error) {
        console.log(`error = \n`, error)
        res.status(404).json({ message: 'error in getUserStats - controllers/user.js', error, success: false })
    }
}

// User registration
export const register = async (req, res) => {
    try {
        const { name, email, password: input_password } = req.body
        if (!name || !email || !input_password) return res.status(400).json({ message: 'make sure to provide all the 4 fieds (name,  email, password)', success: false })
        if (!validator.isEmail(email)) return res.status(400).json({ message: `Invalid email pattern!`, success: false })

        const users = await User.find({})
        const isEmailAlreadyExist = Boolean(users.find(user => user.email == email))
        if (isEmailAlreadyExist) return res.status(400).json({ message: `email already exist`, success: false })

        const hashedPassword = await bcrypt.hash(input_password, 12)

        const newUser = await User.create({ name, email, password: hashedPassword })
        const { password, ...others } = newUser
        return res.status(200).json({ result: others, message: 'register successfully', success: true })
    } catch (error) {
        console.log(`error = \n`, error)
        res.status(404).json({ message: 'error in register - controllers/user.js', error, success: false })
    }
}

// User login
export const login = async (req, res) => {
    try {
        const { email, password: input_password } = req.body
        if (!email || !input_password) return res.status(400).json({ message: 'make sure to provide all the 2 fieds (email, password)', success: false })
        if (!validator.isEmail(email)) return res.status(400).json({ message: `Invalid email pattern!`, success: false })

        const users = await User.find()
        const findedUser = users.find(user => user.email == email)
        if (!findedUser) return res.status(401).json({ message: `invalid email!`, success: false })

        let normalPassword = input_password;
        let hashedPassword = findedUser.password
        const isPasswordCorrect = await bcrypt.compare(normalPassword, hashedPassword)
        if (!isPasswordCorrect) return res.status(401).json({ message: `password incorrect!`, success: false })

        var token = jwt.sign({ id: findedUser._id, isAdmin: findedUser.isAdmin }, process.env.JWT_SECRET_KEY, { expiresIn: `3d` })
        // gh
        const isAdmin = process.env.ADMIN_EMAIL == email
        if (isAdmin) {
            const { password, ...others } = findedUser._doc;
            const updatedUser = await User.findByIdAndUpdate(findedUser._id, { ...others, isAdmin: true }, { new: true })
            return res.status(200).json({ result: { ...updatedUser._doc, token }, message: 'login successfully', success: true })
        }
        else {
            const { password, ...others } = findedUser._doc;
            return res.status(200).json({ result: { ...others, token }, message: 'login successfully', success: true })
        }

    }
    catch (error) {
        console.log(`error = \n`, error)
        res.status(404).json({ message: 'error in login - controllers/user.js', error, success: false })
    }
}

// Update User
export const updateUser = async (req, res) => {
    try {
        const { userId } = req.params
        const findedUser = await User.findById(userId)
        if (!findedUser) return res.status(400).json({ message: 'user not exist', success: false })
        if (req.body.password) req.body.password = await bcrypt.hash(req.body.password, 12)

        const body = req.body
        delete body._id

        const updatedUser = await User.findByIdAndUpdate(userId, { $set: body }, { new: true })
        return res.status(200).json({ result: updatedUser, message: 'user updated successfully!', success: true })
    } catch (error) {
        console.log(`error = \n`, error)
        res.status(404).json({ message: 'error in updateUser - controllers/user.js', error, success: false })
    }
}

export const addProductToCart = async (req, res) => {
    try {
        const { userId } = req.params
        var findedUser = await User.findById(userId);
        if (!findedUser) return res.status(400).json({ message: 'user not exist', success: false });

        const { quantity, productId } = req.body
        const isProductAlreadyInCart = Boolean(findedUser.cartProducts.find(product => product.productId == productId))

        if (!isProductAlreadyInCart) {
            findedUser.cartProducts = findedUser.cartProducts.concat({ productId, quantity })
        }

        const updatedProduct = await User.findByIdAndUpdate(userId, findedUser, { new: true });
        return res.status(200).json({ result: updatedProduct, message: 'product added to cart successfully!', success: true });
    } catch (error) {
        console.log(`error = \n`, error);
        res.status(404).json({ message: 'error in addProductToCart - controllers/user.js', error, success: false });
    }
};

export const removeProductFromCart = async (req, res) => {
    try {
        const { userId } = req.params
        const findedUser = await User.findById(userId);
        if (!findedUser) return res.status(400).json({ message: 'user not exist', success: false });

        const { productId } = req.body
        findedUser.cartProducts = findedUser.cartProducts.filter(product => String(product.productId) !== String(productId))

        const updatedProduct = await User.findByIdAndUpdate(userId, findedUser, { new: true });
        return res.status(200).json({ result: updatedProduct, message: 'product removed from cart successfully!', success: true });
    } catch (error) {
        console.log(`error = \n`, error);
        res.status(404).json({ message: 'error in removeProductFromCart - controllers/user.js', error, success: false });
    }
};

// Delete User
export const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params
        const findedUser = await User.findById(userId)
        if (!findedUser) return res.status(400).json({ message: 'user not exist', success: false })

        const deletedUser = await User.findByIdAndDelete(userId)
        return res.status(200).json({ result: deletedUser, message: 'user deleted successfully!', success: true })
    } catch (error) {
        console.log(`error = \n`, error)
        res.status(404).json({ message: 'error in deleteUser - controllers/user.js', error, success: false })
    }
}

// Delete Usergh
export const deleteUserCollection = async (req, res) => {
    try {
        const result = await User.deleteMany()
        return res.status(200).json({ result, message: 'user collection deleted successfully!', success: true })
    } catch (error) {
        console.log(`error = \n`, error)
        res.status(404).json({ message: 'error in deleteUserCollection - controllers/user.js', error, success: false })
    }
}