import userModel from "../models/userModel.js";

// Add Products to User Cart

const addToCart = async (req, res) => {
  try {
    const { userId, itemId, size } = req.body;

    const userData = await userModel.findById(userId);

    let cartData = await userData.cartData;

    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {
        cartData[itemId][size] = 1;
      }
    } else {
      cartData[itemId] = {};
      cartData[itemId][size] = 1;
    }

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.status(200).json({ message: "Product added to cart", cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Update user Cart

const updateCart = async (req, res) => {
  try {
    const { userId, itemId, size, quantity } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    cartData[itemId][size] = quantity;

    await userModel.findByIdAndUpdate(userId, { cartData });

    res.status(200).json({ message: "Cart updated" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

// Get user Cart

const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    const userData = await userModel.findById(userId);
    let cartData = await userData.cartData;

    res.status(200).json({ cartData });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
};

export { addToCart, updateCart, getUserCart };
