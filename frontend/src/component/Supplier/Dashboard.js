import React, { useEffect, useState } from "react";
import Sidebar from "./Sidebar.js";
import "./dashboard.css";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import { useSelector, useDispatch } from "react-redux";
import { getSupplierProduct } from "../../actions/productAction";
import { getAllOrdersSupplier } from "../../actions/orderAction.js";
// import { getAllUsers } from "../../actions/userAction.js";
import MetaData from "../layout/MetaData";
import axios from "axios";

const SupplierDashboard = () => {
  // Calculate the labels for the past 7 days
  const currentDate = new Date();
  const pastSevenDays = [];
  const monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"  
  ];

  for (let i = 6; i >= 0; i--) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() - i);
    const formattedDate = `${date.getDate()} ${monthNames[date.getMonth()]}`;
    pastSevenDays.push(formattedDate);
  }

  const [lineData, setLineChartData] = useState({
    labels: pastSevenDays,
    datasets: [
      {
        label: "Total Orders",
        fill: false,
        lineTension: 0.3,
        backgroundColor: "rgba(75,192,192,0.4)",
        borderColor: "rgba(75,192,192,1)",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "tomato",
        pointBackgroundColor: "#fff",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "rgba(75,192,192,1)",
        pointHoverBorderColor: "rgba(220,220,220,1)",
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [],
      },
    ],
  });

  const dispatch = useDispatch();

  const { products } = useSelector((state) => state.products);
  // console.log(products);

  const { orders } = useSelector((state) => state.allOrders);

  // const { users } = useSelector((state) => state.allUsers);

  let outOfStock = 0;

  products &&
    products.forEach((item) => {
      if (item.Stock === 0) {
        outOfStock += 1;
      }
    });

  useEffect(() => {
    dispatch(getSupplierProduct());
    dispatch(getAllOrdersSupplier());

    // Fetch orders for each date in pastSevenDays
    const fetchOrders = async () => {
      const fetchedOrders = [];
      for (let i = 6; i >= 0; i--) {
        const date = new Date(currentDate);
        date.setDate(currentDate.getDate() - i);

        const formattedDate = date.toISOString().split('T')[0];

        try {
          const response = await axios.get(`/api/v1/total-orders/${formattedDate}`);
          const data = response.data;
          fetchedOrders.push(data.totalOrders);
        } catch (error) {
          console.error(`Error fetching orders for date ${formattedDate}:`, error.message);
        }
      }
      // console.log(fetchedOrders);
      // Update the line chart data with fetched order counts
      setLineChartData(prevData => ({
        ...prevData,
        datasets: [
          {
            ...prevData.datasets[0],
            data: fetchedOrders,
          },
        ],
      }));
    };

    fetchOrders();
    // dispatch(getAllUsers());
  }, [dispatch]);

  let totalAmount = 0;
  orders &&
    orders.forEach((item) => {
      totalAmount += item.totalPrice;
    });

  const lineState = {
    labels: ["Initial Amount", "Amount Earned"],
    datasets: [
      {
        label: "TOTAL AMOUNT",
        backgroundColor: ["tomato"],
        hoverBackgroundColor: ["rgb(197, 72, 49)"],
        data: [0, totalAmount],
      },
    ],
  };

  const doughnutState = {
    labels: ["Out of Stock", "InStock"],
    datasets: [
      {
        backgroundColor: ["#00A6B4", "#6800B4"],
        hoverBackgroundColor: ["#4B5000", "#35014F"],
        data: [outOfStock, products.length - outOfStock],
      },
    ],
  };

  return (
    <div className="dashboard">
      <MetaData title="Dashboard - Staff Panel" />
      <Sidebar />

      <div className="dashboardContainer">
        <Typography component="h1" className="dashboardHeading">Dashboard</Typography>

        <div className="dashboardSummary">
          {/* <div>
            <p>
              Total Amount <br /> ৳{totalAmount}
            </p>
          </div> */}
          <div className="dashboardSummaryBox2">
            <Link to="/supplier/products">
              <p>Product</p>
              <p>{products && products.length}</p>
            </Link>
            <Link to="/supplier/orders">
              <p>Orders</p>
              <p>{orders && orders.length}</p>
            </Link>
            {/* <Link to="/admin/users">
              <p>Users</p>
              <p>{users && users.length}</p>
            </Link> */}
          </div>
        </div>
        <div className="lineChart">
          <Typography variant="h4" className="chartTitleLine">
            Weekly Order Summary
          </Typography>
          <div className="line">
            <Line data={lineData} />
          </div>
        </div>

        <div className="doughnutChart">
          <Typography variant="h4" className="chartTitle">
            Stock Summary
          </Typography>
          <div className="doughnut">
            <Doughnut data={doughnutState} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupplierDashboard;
