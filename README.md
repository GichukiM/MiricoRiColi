
# Mirico Ri Coli - E-commerce Platform  

This is a full-stack E-commerce platform built using the MERN (MongoDB, Express, React, Node.js) stack. It provides an intuitive shopping experience for users and powerful administrative tools for managing products and orders.  

## Features  

### Frontend (Store):  
- Browse products by **subcategories** (e.g., Oxford, Derbies, Monk Straps, Belts, Wallets, etc.).  
- **Sort products** by price.  
- Add products to the shopping cart.  
- **User Authentication**: Secure login and signup.  
- **Order Placement and Checkout**: Seamless checkout experience.  
- **Search Bar**: Available only on a specific page for better usability.  
- View and track your orders in the **Profile** section.  
- Main pages include: **Hero**, **About**, **Contact**, **Profile**, **Cart**, **Checkout**, and **All Products**.  

### Admin Panel:  
- Manage products (Create, Edit, Delete).  
- View orders and delivery information.  
- **Real-time order management** to track and process orders efficiently.  

### Backend:  
- **API routes** to manage products, orders, and users.  
- Secure user authentication with **token expiry management**.  
- MongoDB database for storing product, order, and user data.  

## Technologies Used  

### Frontend:  
- React.js  
- React Router  
- TailwindCSS  

### Backend:  
- Node.js  
- Express.js  

### Database:  
- MongoDB  

### Authentication:  
- JWT (JSON Web Tokens)  

### State Management:  
- Context API  

### Deployment:  
- Vercel  

## Live Links  

- **Admin Panel:** [Admin Live Link](https://mirico-ri-coli-admin.vercel.app)  
- **Backend:** [Backend Live Link](https://mirico-ri-coli-backend.vercel.app/)  
- **Frontend/Store:** [Frontend/Store Live Link](https://miricoricoli.vercel.app/)  

## Getting Started  

### Prerequisites  
- Node.js  
- MongoDB (local or cloud-based, e.g., MongoDB Atlas)  

### Installation  

#### 1. Clone the repository:  

```bash  
git clone https://github.com/your-username/mirico-ri-coli.git  
```  

#### 2. Install dependencies  

Navigate to each of the three directories (`backend`, `frontend`, and `adminPanel`) and install the dependencies:  

```bash  
cd <directory>  
npm install  
```  

#### 3. Set up environment variables  

- In the **frontend (store)** directory:  
  ```env  
  VITE_BACKEND_URL = "http://localhost:<your-preferred-port>"  
  ```  

- In the **adminPanel** directory:  
  ```env  
  VITE_BACKEND_URL = "http://localhost:<your-preferred-port>"  
  ```  

- In the **backend** directory:  
  ```env  
  PORT=<your-preferred-port>  
  MONGODB_URI=your-mongodb-uri  
  CLOUDINARY_API_KEY=<your-cloudinary-api-key>  
  CLOUDINARY_SECRET_KEY=<your-cloudinary-secret-key>  
  CLOUDINARY_NAME=<your-cloudinary-name>  
  JWT_SECRET=your-jwt-secret  
  ADMIN_EMAIL=<your-preferred-admin-email>  
  ADMIN_PASSWORD=<your-preferred-admin-password>  
  ```  

#### 4. Start the backend server  

Navigate to the backend directory and start the server:  

```bash  
npm run start  
```  

#### 5. Install frontend dependencies  

Navigate to both the **store** and **adminPanel** directories and install the dependencies:  

```bash  
cd <directory>  
npm install  
```  

#### 6. Start the frontend servers  

Navigate to each frontend directory (`store` and `adminPanel`) and start the servers:  

```bash  
npm run dev  
```  

## API Documentation  

## API Testing with Insomnia

### Steps to Import the Collection:
1. Download the Insomnia API collection file: [Download here](https://drive.google.com/drive/folders/1sEjxwdZY4l6X8UmEvTg-vZJTOx4QQm1Y?usp=sharing).
2. Open [Insomnia](https://insomnia.rest/download) on your machine.
3. Go to **File > Import Data > From File**.
4. Select the downloaded `.json` file.
5. Start testing the endpoints.

### Notes:
- Ensure your server is running before testing the endpoints.
- Update the **Base URL** in the Insomnia environment settings if your server runs on a different host or port.

## Contributing  

If you would like to contribute to the project, please follow these steps:  

1. Fork the repository  
2. Create a new branch (`git checkout -b feature-name`)  
3. Make your changes  
4. Commit your changes (`git commit -m 'Add feature'`)  
5. Push to the branch (`git push origin feature-name`)  
6. Create a new Pull Request  

## License  

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.  
