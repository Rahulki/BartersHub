import express, { Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import session from 'express-session';
import multer from 'multer';
import registerUser from './Controllers/Authentication/register.js';
import { login, logout } from './Controllers/Authentication/login.js';
import { addProduct } from './Controllers/Products/add.js';
import { getProducts, getProductById } from './Controllers/Products/get.js';
import { getTestimonials } from './Controllers/Testimonials/get.js';
import { addTestimonial } from './Controllers/Testimonials/add.js';
import { firebaseUploadMiddleware } from './Middleware/storageBucket.js';
import { userProfile, getUserListings, deleteListing, updateListing, disableUser, deleteUser, fetchAllUsers, enableUser } from './Controllers/userProfile/UserProfileController.js';
import checkUser from './Middleware/checkUser.js';
import { addFeaturedProduct } from './Controllers/FeaturedProducts/add.js';
import { getFeaturedProducts } from './Controllers/FeaturedProducts/get.js';
import { getRecentlyListedProducts } from './Controllers/RecentlyAddedProducts/get.js';
import { deleteFeaturedProduct } from './Controllers/FeaturedProducts/delete.js';
import { deleteProduct } from './Controllers/Products/delete.js';


const app = express();
const upload = multer();

app.use(cors({ origin: 'http://localhost:3000', credentials: true, methods: ["GET", 'POST', 'PUT', 'DELETE'], },))
app.use(bodyParser.json());
app.use(session({
  secret: "It's top secret",
  resave: false,
  saveUninitialized: false
}))

// API End-points

//Authentication endpionts
app.post('/register', registerUser);
app.post('/login', login);
app.post('/logout', logout);

//product endpoints
app.post('/add-product', checkUser, firebaseUploadMiddleware, addProduct);
app.get('/get-products', getProducts)
app.get('/get-product/:id', getProductById)


//Home page endpoints
app.get('/get-testimonials', getTestimonials)
app.post('/add-testimonial', addTestimonial)
app.get('/get-featured-products', getFeaturedProducts)
app.get('/get-recently-products', getRecentlyListedProducts);

//User data endpoints
app.get('/userprofile/:id', userProfile)
app.get('/user-listings', checkUser, getUserListings)
app.post('/edit-product', checkUser, updateListing);
app.delete('/delete-product/:id', checkUser, deleteListing);

//Admin Panel endpoints
app.post('/admin/add-featured-product', addFeaturedProduct)
app.delete('/admin/delete-featured-product', deleteFeaturedProduct);
app.delete('/admin/delete-product/:productId',checkUser,deleteProduct)
app.put('/admin/disable-user/:userId', checkUser, disableUser);
app.put('/admin/enable-user/:userId', checkUser, enableUser);
app.delete('/admin/delete-user/:userId', checkUser, deleteUser);
app.get('/admin/users', fetchAllUsers);


// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});