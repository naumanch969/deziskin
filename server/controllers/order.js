import Order from '../models/order.js'



export const getOrders = async (req, res) => {
    try {
        let orders = await Order.find()
        return res.status(200).json({ result: orders, message: 'orders fetched successfully!', success: true })
    }
    catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in getOrders - controllers/order.js', error, success: false })
    }
}
export const getMonthlyIncome = async (req, res) => {
    try {
        const { productId } = req.query

        const currentDate = new Date()
        const lastMonth = new Date(currentDate.setMonth(currentDate.getMonth() - 1))
        const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1))

        const income = await Order.aggregate([
            {
                $match: {
                    createdAt: { $gte: previousMonth },
                    ...(productId && {
                        products: { $elemMatch: { productId } }
                    })
                }
            },
            {
                $project: {
                    month: { $month: "$createdAt" },
                    amount: "$amount"
                }
            },
            {
                $group: { _id: "$month", total: { $sum: "$amount" } }
            }
        ])

        res.status(200).json({ result: income, success: true, message: 'stats get successfully' })

    }
    catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in getMonthlyIncome - controllers/user.js', error, success: false })
    }
}


export const createOrder = async (req, res) => {
    try {
        const { products, amount, address, status } = req.body
        if (!products || !amount || !address || !status) return res.status(400).json({ message: 'make sure to provide all the 4 fields (products, amount,address,status) ', success: false })

        const newOrder = await Order.create({ user: req.user.id, products, amount, address, status })
        res.status(200).json({ result: newOrder, message: 'order created successfully!', success: true })
    }
    catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in createOrder - controllers/order.js', error, success: false })
    }
}


export const getOrder = async (req, res) => {
    try {
        const { orderId } = req.params

        const findedOrder = await Order.findById(orderId)
        if (!findedOrder) return res.status(400).json({ message: 'order not exist', success: false })

        return res.status(200).json({ result: findedOrder, message: 'order fetched successfully', success: true })
    }
    catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in getOrder - controllers/order.js', error, success: false })
    }
}


export const getUserOrders = async (req, res) => {
    try {
        const { userId } = req.params

        const findedOrders = await Order.find({user:userId})
        if (!findedOrders) return res.status(400).json({ message: 'wrong user id', success: false })

        return res.status(200).json({ result: findedOrders, message: 'user orders fetched successfully', success: true })
    }
    catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in getUserOrders - controllers/order.js', error, success: false })
    }
}


export const updateOrder = async (req, res) => {
    try {
        const findedOrder = await Order.findById(req.params.id)
        if (!findedOrder) return res.status(400).json({ message: 'order not exist', success: false })

        const body = req.body
        delete body._id

        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, { $set: body }, { new: true })
        return res.status(200).json({ result: updatedOrder, message: 'order updated successfully!', success: true })
    }
    catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in updateOrder - controllers/order.js', error, success: false })
    }
}


export const deleteOrder = async (req, res) => {
    try {
        const findedOrder = await Order.findById(req.params.id)
        if (!findedOrder) return res.status(400).json({ message: 'order not exist', success: false })

        const deletedOrder = await Order.findByIdAndDelete(req.params.id)
        return res.status(200).json({ result: deletedOrder, message: 'order deleted successfully!', success: true })
    }
    catch (error) {
        console.log(`error ----->\n`, error)
        res.status(404).json({ message: 'error in deleteOrder - controllers/order.js', error, success: false })
    }
}

