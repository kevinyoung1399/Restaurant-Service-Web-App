import React from 'react';

/**
 * This is the component that holds the information on UnconfirmedOrders
 * @author Kevin Young
 * @param {*} ordernumber - The number ID of the order
 * @param {*}  tablenumber - The table number of the order
 * @param {*} basketitems - The items in the basket of the order
 * @param {*}  timeordered - The time the order was set at
 * @param {*} confirmOrder - The confirmOrder fucntion
 * @param {*} cancelOrder - The cancelOrder function
 */
const UnconfirmedOrderItem = ({ ordernumber, tablenumber, basketitems, timeordered, confirmOrder, cancelOrder}) => {

  /**
   * The ConfirmOrder event handler function
   * 
   * @example
   * <input onClick={ () => onPressConfirmOrder() } />
   */
  const onPressConfirmOrder = () => {
    alert("Order " + ordernumber + " Confirmed ");
    confirmOrder(ordernumber);
  }

  /**
   * The CancelOrder event handler function
   * 
   * @example
   * <input onClick={ () => onPressCancelOrder() } />
   */
  const onPressCancelOrder = () => {
    alert("Order " + ordernumber + " Cancelled ");
    cancelOrder(ordernumber);
  }

  return(
    <article className="row pa2">
      <div className="br3 ba b--white-10 mv4 w-100 w-50-m w-100-l mw6 shadow-5 center bg-near-white">
        <div className="pa4 col1 white-80">
          <h2 className="fw5 nice-bold col2">{'Table Number ' + tablenumber}</h2>
          <h2 className="fw5 nice-bold col1">{'Order Number ' + ordernumber}</h2>
          <div className="tl fw5 nice-bold near-black">
            {'Items: ' + basketitems}
          </div>
          <h5 className="tr fw5 nice-bold near-black">{"Time Ordered: " + timeordered}</h5>
          <div>
            <input
              onClick={() => onPressConfirmOrder()}
              className="nice-bold col2 b ma1 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
              type="submit"
              value="confirm order"
            />
          </div>
          <div>
            <input
              onClick={() => onPressCancelOrder()}
              className="nice-bold col1 b ma1 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
              type="submit"
              value="cancel order"
            />
          </div>
        </div>
      </div>
    </article>  
  )
}

export default UnconfirmedOrderItem;