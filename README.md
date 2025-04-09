E-Commerce MERN Application
Overview
This project is a comprehensive e-commerce web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). It offers a seamless online shopping experience with functionalities for both customers and administrators.​

Features
User Features
User Authentication: Secure registration and login functionalities.​

Product Browsing: Browse, search, and view detailed information about products.​

Shopping Cart: Add or remove items, adjust quantities, and proceed through a streamlined checkout process.​

Order Management: Place orders and view order history.​

Admin Features
Product Management: Add, edit, delete, and manage product details.​
Order Tracking: View and update order statuses.​
User Management: Manage user accounts and permissions.​

Technologies Used
Frontend: React.js with React Router for dynamic, single-page application routing and a responsive user interface.​

State Management: Redux Toolkit for efficient state management.​

Backend: Node.js with Express.js to build a robust RESTful API.​

Database: MongoDB with Mongoose for flexible and scalable data storage solutions.​

Authentication: Implemented using Passport.js strategies, including JWT for API authentication.​

Installation and Setup

Clone the repository:
git clone https://github.com/Shivam-guptaa/ecommerce-mern.git

Navigate to the project directory:
cd ecommerce-mern

Install dependencies for both client and server:
npm install

Set up environment variables:

  Backend:
    Create a .env file in the server directory.
    Add the following variables with appropriate values:
        MONGO_URI=your_mongodb_connection_string
        JWT_SECRET=your_jwt_secret

  Frontend:
    Create a .env file in the client directory.
    Add the following variable:
        REACT_APP_API_URL=http://localhost:5000

Run the application:
  Backend:
    Navigate to the server directory:
        cd server
    Start the server:
        npm run dev
  
  Frontend:
    Navigate to the client directory:
      cd client
    Start the client:
      npm start

Access the application:
  Frontend: http://localhost:3000​
  Backend API: http://localhost:5000​

Deployment
The application is deployed and can be accessed at dashing-biscotti-4cbc74.netlify.app.​

Contributing
Contributions are welcome. Please fork the repository and submit a pull request for any enhancements or bug fixes.​

License
This project is licensed under the MIT License.​
