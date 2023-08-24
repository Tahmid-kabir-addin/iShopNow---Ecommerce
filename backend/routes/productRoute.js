// Importing the required modules and functions
const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
  createProductReview,
  getProductReviews,
  deleteReview,
  getAdminProducts,
  getSupplierProducts,
} = require("../controllers/productController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

// Creating an Express Router instance
const router = express.Router();

// Route: GET /products
// Description: Fetches all products
router.route("/products").get(getAllProducts);

// Route: GET /admin/products
// Description: Fetches all products accessible to an admin user
// Middleware: isAuthenticatedUser (checks if user is authenticated)
//              authorizeRoles("admin") (checks if user has admin role)
router
  .route("/admin/products")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAdminProducts);

// Route: GET /supplier/products
// Description: Fetches all products accessible to an admin user
// Middleware: isAuthenticatedUser (checks if user is authenticated)
//              authorizeRoles("supplier") (checks if user has admin role)
router
  .route("/supplier/products")
  .get(isAuthenticatedUser, authorizeRoles("supplier"), getAdminProducts);

// Route: POST /admin/product/new
// Description: Creates a new product
// Middleware: isAuthenticatedUser (checks if user is authenticated)
//              authorizeRoles("admin") (checks if user has admin role)
router
  .route("/admin/product/new")
  .post(isAuthenticatedUser, authorizeRoles("admin"), createProduct);

// Route: POST /supplier/product/new
// Description: Creates a new product
// Middleware: isAuthenticatedUser (checks if user is authenticated)
//              authorizeRoles("supplier") (checks if user has admin role)
router
  .route("/supplier/product/new")
  .post(isAuthenticatedUser, authorizeRoles("supplier"), createProduct);

// Route: PUT /admin/product/:id
// Description: Updates a product by its ID
// Middleware: isAuthenticatedUser (checks if user is authenticated)
//              authorizeRoles("admin") (checks if user has admin role)
router
  .route("/admin/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteProduct);

// Route: PUT /supplier/product/:id
// Description: Updates a product by its ID
// Middleware: isAuthenticatedUser (checks if user is authenticated)
//              authorizeRoles("supplier") (checks if user has admin role)
router
  .route("/supplier/product/:id")
  .put(isAuthenticatedUser, authorizeRoles("supplier"), updateProduct)
  .delete(isAuthenticatedUser, authorizeRoles("supplier"), deleteProduct);

// Route: GET /product/:id
// Description: Fetches details of a specific product by its ID
router.route("/product/:id").get(getProductDetails);

// Route: PUT /review
// Description: Creates a new review for a product
// Middleware: isAuthenticatedUser (checks if user is authenticated)
router.route("/review").put(isAuthenticatedUser, createProductReview);

// Route: GET /reviews
// Description: Fetches all reviews for a product
//              DELETE /reviews: Deletes a review for a product
// Middleware: isAuthenticatedUser (checks if user is authenticated)
router
  .route("/reviews")
  .get(getProductReviews)
  .delete(isAuthenticatedUser, deleteReview);

// Exporting the defined router to be used in the main application
module.exports = router;
