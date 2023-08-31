import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
// gh
import userRoutes from './routes/user.js'
import productRoutes from './routes/product.js'
import orderRoutes from './routes/order.js'
import stripeRoutes from './routes/stripe.js'
import contactRoutes from './routes/contact.js'

dotenv.config()
const app = express()
const mongooseURL = process.env.COMPASS_URL
// const mongooseURL = process.env.ATLAS_URL
const port = process.env.PORT
 
app.use(cors())
app.use(cors())
app.use(express.json({limit:'50mb'}));
app.use(bodyParser.json({limit:'50mb'}))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

app.use('/stripe', stripeRoutes);
app.use('/user', userRoutes);
app.use('/product', productRoutes);
app.use('/order', orderRoutes);
app.use('/contact', contactRoutes);
 
app.get('/', (req, res) => res.status(200).json({ message: 'App is Working' }))



// const sentence = "   This is a sample sentence!@#$   ";
// const formattedSentence = sentence
//     .trim()
//     .toLowerCase()
//     .replace(/[^\w\s]/g, '')
//     .split(/\s+/)
//     .filter((word) => word !== '')
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//     .sort()
//     .reverse()
//     .join(' ');

// console.log(formattedSentence); // Output: "Sample Sentence This"





mongoose.connect(mongooseURL)
    .then(() => app.listen(port, () => console.log('listening at the port ', port)))
    .catch((error) => console.log('error in connecting to mongoDB -----> \n', error))