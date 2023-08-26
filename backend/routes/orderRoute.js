const express = require("express");
const {
  newOrder,
  getSingleOrder,
  myOrders,
  getAllOrders,
  updateOrder,
  deleteOrder,
  getAllOrdersSupplier,
  getTotalOrdersForDate,
} = require("../controllers/orderController");
const router = express.Router();

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id").get(isAuthenticatedUser, getSingleOrder);

router.route("/orders/me").get(isAuthenticatedUser, myOrders);

router
  .route("/admin/orders")
  .get(isAuthenticatedUser, authorizeRoles("admin"), getAllOrders);

router
  .route("/supplier/orders")
  .get(isAuthenticatedUser, authorizeRoles("supplier"), getAllOrders);

router
  .route("/admin/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("admin"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("admin"), deleteOrder);

router
  .route("/supplier/order/:id")
  .put(isAuthenticatedUser, authorizeRoles("supplier"), updateOrder)
  .delete(isAuthenticatedUser, authorizeRoles("supplier"), deleteOrder);

router 
  .route("/total-orders/:date")
  .get(isAuthenticatedUser, authorizeRoles("admin", "supplier"), getTotalOrdersForDate);

module.exports = router;
