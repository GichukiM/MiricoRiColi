import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

const app = express();
const port = process.env.PORT || 5100;
connectDB();
connectCloudinary();

app.use(express.json());
app.use(cors());

// API ENDPOINTS
app.use('/api/user', userRouter);
app.use('/api/products', productRouter);
app.use('/api/cart', cartRouter);
app.use('/api/order', orderRouter);

app.get('/' , (req, res) => {
    res.send('Hello from the API!');
});

app.listen(port, () => console.log('Server listening on port ' + port)
)