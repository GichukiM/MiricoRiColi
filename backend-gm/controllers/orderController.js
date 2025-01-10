import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import IntaSend from 'intasend-node';

const currency = 'KES'
const deliveryCharge = 100

// Gateway configuration
let intasend = new IntaSend(
    process.env.INTASEND_PUBLISHABLE_KEY,
    process.env.INTASEND_SECRET_KEY,
    true, // Test ? Set true for test environment
);

// Placing Order using COD
const placeOrder = async (req, res) => {
    try {
        const { userId, address, amount, items } = req.body;

        const orderData = {
            userId,
            items,
            amount,
            address,
            paymentMethod: "COD",
            payment: false,
            date: Date.now(),
        };

        const newOrder =  new orderModel(orderData);
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId, {cartData: {}})

        res.status(200).json({ message: "Order placed successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

// Place orders using Intasend
// const placeOrderWithIntasend = async (req, res) => {
//     try {
        
//         const { userId, address, amount, items } = req.body;
//         const { origin } = req.headers;

//         const orderData = {
//             userId,
//             items,
//             amount,
//             address,
//             paymentMethod: "IntaSend",
//             payment: false,
//             date: Date.now(),
//         };

//         const newOrder =  new orderModel(orderData);
//         await newOrder.save()

//         const line_items = items.map((item) => ({
//             price_data: {
//                 currency: currency,
//                 product_data: {
//                     name: item.name
//                 },
//                 unit_amount: item.price * 100
//             },
//             quantity: item.quantity
//         }))

//         line_items.push({
//             price_data: {
//                 currency: currency,
//                 product_data: {
//                     name: 'Delivery Charges'
//                 },
//                 unit_amount: deliveryCharge * 100
//             },
//             quantity: 1
//         })

//         const session = await intasend.checkout.sessions.create({
//             success_url: `${origin}/verify?success=true&orderId=$%{newOrder._id}`,
//             cancel_url: `${origin}/verify?success=false&orderId=$%{newOrder._id}`,
//             line_items,
//             mode: 'payment',
//         })

//         res.status(200).json({ session_url: session.url });
        

//     } catch (error) {
//         console.log(error);
//         res.status(500).json({ message: error.message });
//     }
// }

const placeOrderWithIntasend = async (req, res) => {
    try {
      const { userId, address, amount, items } = req.body;
      const { origin } = req.headers;
  
      // Create an order in the database
      const orderData = {
        userId,
        items,
        amount,
        address,
        paymentMethod: 'IntaSend',
        payment: false,
        date: Date.now(),
      };
  
      const newOrder = new orderModel(orderData);
      await newOrder.save();
  
      // Calculate total amount (you can add a delivery charge here if necessary)
      const totalAmount = amount + deliveryCharge;
  
      // Create the payment request via IntaSend
      const collection = intasend.collection();
      const chargeResponse = await collection.charge({
        amount: totalAmount,  // Total amount (including delivery)
        currency: currency,  // Currency (e.g., KES for Kenya)
        api_ref: `order_${newOrder._id}`,  // Unique reference for the payment
        redirect_url: `${origin}/verify?orderId=${newOrder._id}`,  // URL to redirect after payment completion
      });
  
      // Send the session URL from IntaSend
      res.status(200).json({ session_url: chargeResponse.url });
  
    } catch (error) {
        // Log the full error to understand what's going wrong
        console.error('Error details:', error);
      
        if (error.response) {
          // Decode the response buffer to JSON
          const errorMessage = error.response.data.toString(); // Decode buffer to string
          const parsedError = JSON.parse(errorMessage); // Parse the string into JSON
      
          console.error('IntaSend Error Response:', parsedError);
          res.status(500).json({ message: 'IntaSend error: ' + parsedError.message || 'Unknown error' });
        } else {
          // Generic error message
          res.status(500).json({ message: 'Internal server error' });
        }
      }      
      
  };

// All orders for Admin Panel
const allOrders = async (req, res) => {

    try {
        
        const orders = await orderModel.find({});

        res.status(200).json({ orders });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

}

// User Order Data FE
const userOrders = async (req, res) => {
    try {
        
        const { userId } = req.body;

        const orders = await orderModel.find({ userId });

        res.status(200).json({ orders });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

// Update order status from Admin Panel
const updateStatus = async (req, res) => {

    try {
        
        const { orderId, status } = req.body;

        await orderModel.findByIdAndUpdate(orderId, { status });

        res.status(200).json({ message: "Status updated successfully" });

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }

}

export { placeOrderWithIntasend, updateStatus, placeOrder, userOrders, allOrders };