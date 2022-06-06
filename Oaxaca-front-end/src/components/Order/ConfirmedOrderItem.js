import React from 'react';

/**
 * This is the component that shows the individual confirmed order items.
 * @author Kevin Young
 * @param {*} ordernumber - The order number
 * @param {*} tablenumber - The table number of the order
 * @param {*} basketitems - The items in the basket of the order
 * @param {*} timeordered - The time the order was placed at
 * @param {*} prepareOrder - The prepareOrder function
 */
const ConfirmedOrderItem = ({ ordernumber, tablenumber, basketitems, timeordered, prepareOrder}) => {
  
  /**
   * The handler function for the prepareOrder button
   * 
   * @example
   * <button onClick={ () => onPressPrepareOrder() } />
   */
  const onPressPrepareOrder = () => {
    alert("Order " + ordernumber + " Prepared");
    prepareOrder(ordernumber);
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
        {prepareOrder === false ? (<div></div>
          ) : <button className=" nice-bold col1 b ma1 pv2 input-reset ba b--white bg-transparent grow pointer f6 dib"
          onClick={() => onPressPrepareOrder()}>Prepare Order
        </button>  }
      </div>
    </div>
    </article>  
  )
}

export default ConfirmedOrderItem;