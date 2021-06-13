import React, { useEffect } from "react";
import { Table, Button } from "react-bootstrap";

import { useSelector, useDispatch } from "react-redux";
import { LinkContainer } from "react-router-bootstrap";

import Message from "../components/Message.js";
import Loader from "../components/Loader.js";

import { listOrders } from "../actions/orderActions";

const OrderListScreen = ({ history }) => {
  const dispatch = useDispatch();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  //   if (orders.length > 0) console.log(orders);
  //   (orders) => {
  //     console.log(orders);
  //   };
  //   const rendValue = async () => {
  //     const data = await orders.find();
  //     console.log(data);
  //   };
  //   if (orders) {
  //      orders[0].paymentResult = 1;
  //     console.log(orders[0].paymentResult);
  //   }
  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
      console.log(orders);
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);

  return (
    <>
      <h1>Orders</h1>

      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant='danger'>{error}</Message>
      ) : (
        <Table striped bordered hover responsive className='table-sm'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>EMAIL</th>
              <th>ORDER ITEMS</th>
              <th>TOTAL</th>
              <th>PAYMENT</th>
              <th>DELIVERY</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order._id}>
                <td>{order._id}</td>
                <td>{order.user.name}</td>
                <td>
                  {/* {order.paymentResult.status} */}
                  {/* <a href={`mailto:${order.paymentResult.email_address}`}>
                    {order.paymentResult.email_address}
                  </a> */}
                  {/* {order.paymentResult.id} */}
                </td>
                <td>
                  {order.orderItems.map((item, index) => (
                    <p key={index}>{item.name}</p>
                  ))}
                </td>
                <td>{order.totalPrice}</td>
                <td>{order.isPaid ? "PAID" : "NOT PAID"}</td>
                <td>{order.isDelivered ? "DELIVERED" : "NOT DELIVERED"}</td>
                <td>
                  <LinkContainer to={`/order/${order._id}`}>
                    <Button variant='light' className='btn-sm'>
                      Details
                    </Button>
                  </LinkContainer>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default OrderListScreen;
