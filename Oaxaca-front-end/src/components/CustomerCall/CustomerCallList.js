import React from "react";
import CustomerCallItem from "./CustomerCallItem";

/**
 * The CustomerCallList component that holds all the CustomerCallItems
 * @author Chuyu Wang, Divya Sharma
 * @param {*} calls
 * @param {*} finishCustomerCall
 */
const CustomerCallList = ({ calls, finishCustomerCall}) => {
  const callsComponent = calls.map((call, i) => {
    return (
      <CustomerCallItem
        tableNumber={calls[i].tablenumber}
        timeCalled={calls[i].timecalled}
        finishCustomerCall={finishCustomerCall}
      />
    )
  })
  return (
    <div> {callsComponent} </div>
)}

export default CustomerCallList;

