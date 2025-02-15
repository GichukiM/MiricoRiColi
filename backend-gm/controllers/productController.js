import { v2 as cloudinary } from 'cloudinary';
import productModel from '../models/productModels.js';

const addProduct = async (req, res) => {

    try {
        
        const { name, price, description, category, subCategory, sizes, bestSeller } = req.body;

        const image1 = req.files.image1 && req.files.image1[0];
        const image2 = req.files.image2 && req.files.image2[0];
        const image3 = req.files.image3 && req.files.image3[0];
        const image4 = req.files.image4 && req.files.image4[0];
        const image5 = req.files.image5 && req.files.image5[0];

        const images = [image1, image2, image3, image4, image5].filter((item) => item !== undefined);

        let imagesUrl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path, {resource_type: 'image'});
                return result.secure_url;
            })
        );

        const productData = {
            name,
            price: Number(price),
            description,
            category,
            subCategory,
            sizes: (sizes && { sizes: sizes.split(',')}),
            bestSeller: bestSeller === "true" ? true : false,
            image: imagesUrl,
            date: Date.now()
        }

        console.log(productData);
        
        const product = new productModel(productData);

        await product.save();

        res.status(200).json({message: "Product saved successfully"});

    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }

};

const listProducts = async (req, res) => {

    try {
        
        const products = await productModel.find({});

        res.status(200).json({products});

    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }

};

const removeProduct = async (req, res) => {

    try {
        
        await productModel.findByIdAndDelete(req.body.id);

        res.status(200).json({message: "Product removed successfully"});

    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message});
    }

};

const singleProduct = async (req, res) => {

    try {
        
        const { productId } = req.body;

        const product = await productModel.findById(productId);

        res.json({product});

    } catch (error) {
        console.log(error);
        res.status(400).json({message: error.message}); 
    }

};

const editProduct = async (req, res) => {
    try {
      const { productId, name, price, description, category, subCategory, sizes, bestSeller } = req.body;
  
      // Handle new image uploads (if provided)
      const image1 = req.files?.image1?.[0];
      const image2 = req.files?.image2?.[0];
      const image3 = req.files?.image3?.[0];
      const image4 = req.files?.image4?.[0];
      const image5 = req.files?.image5?.[0];
  
      const newImages = [image1, image2, image3, image4, image5].filter((item) => item !== undefined);
  
      let newImagesUrl = [];
      if (newImages.length > 0) {
        newImagesUrl = await Promise.all(
          newImages.map(async (item) => {
            const result = await cloudinary.uploader.upload(item.path, { resource_type: 'image' });
            return result.secure_url;
          })
        );
      }
  
      // Build the updated product data
      const updatedProductData = {
        ...(name && { name }),
        ...(price && { price: Number(price) }),
        ...(description && { description }),
        ...(category && { category }),
        ...(subCategory && { subCategory }),
        ...(sizes && { sizes: sizes.split(',') }),
        ...(bestSeller !== undefined && { bestSeller }),
        ...(newImagesUrl.length > 0 && { image: newImagesUrl }),
        date: Date.now(), // Optional: update the date
      };
  
      // Find and update the product
      const updatedProduct = await productModel.findByIdAndUpdate(productId, updatedProductData, { new: true });
  
      if (!updatedProduct) {
        return res.status(404).json({ message: "Product not found" });
      }
  
      res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
      console.log(error);
      res.status(400).json({ message: error.message });
    }
  };  

export { listProducts, removeProduct, addProduct, singleProduct, editProduct };