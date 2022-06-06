import React from "react";
import PreparedOrderItem from "./PreparedOrderItem";

/**
 * The component that displays the list of PreparedOrderItems
 * @author Kevin Young, Divya Sharma
 * @param {*} deliverOrder - The deliverOrder function
 * @param {*} orders - All the orders to be listed
 */
const PreparedOrderList = ({ orders, deliverOrder}) => {

  //we do this because waiters can deliver an order but kitchen cannot, so waiter has a deliver order button but kitchen does not.
  // const canDeliverOrder = (orderNumber) => {
  //   if (deliverOrder === false) {
  //     return deliverOrder
  //   }
  //   return deliverOrder(orderNumber)
  // }

  const orderComponent = orders.map((order, i) => {
    return (
      <PreparedOrderItem
        ordernumber={orders[i].id}
        tablenumber={orders[i].tablenumber}
        basketitems={orders[i].basketitems.replace(/"/g,"").replace(/[{}]/g,"")}
        timeordered={orders[i].timeordered}
        paid={orders[i].paid}
        deliverOrder={deliverOrder}
      />
    )
  })
  
  return (
    <div> {orderComponent} </div>
  )
}

export default PreparedOrderList;
