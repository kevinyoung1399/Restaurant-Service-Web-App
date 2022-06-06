import React from 'react'
import Popup from 'reactjs-popup'

/**
 * The Menu component of this React App
 * @author Hyungdon Um, Kevin Young
 */
class AddMenuItemPopUp extends React.Component {

  constructor(props) {
    super();
    this.state = {
      dish_name: "",
      price: 0,
      description : "",
      type : "",
      allergy : "",
      calories: 0,
      imageURL: ""
    };
  }

  /**
   * The DishNameChange event handler function
   * @param {*} event - The event that triggers the function
   * 
   * @example
   * <input onClick={ this.onDishNameChange } /> 
   */
  onDishNameChange = event => {
    this.setState({ dish_name: event.target.value });
  };

  /**
   * The PriceChange event handler function
   * @param {*} event - The event that triggers the function
   * 
   * @example
   * <input onClick={ this.onPriceChange } /> 
   */
  onPriceChange = event => {
    this.setState({ price: event.target.value });
  };

  /**
   * The TypeChange event handler function
   * @param {*} event - The event that triggers the function
   * 
   * @example
   * <input onClick={ this.onTypeChange } /> 
   */
  onTypeChange = event => {
    this.setState({ type: event.target.value });
  };

  /**
   * The DescriptionChnage event handler function
   * @param {*} event - The event that triggers the function
   * 
   * @example
   * <input onClick={ this.onDescriptionChange } /> 
   */
  onDescriptionChange = event => {
    this.setState({ description: event.target.value });
  };

  /**
   * The AllergyChange event handler function
   * @param {*} event - The event that triggers the function
   * 
   * @example
   * <input onClick={ this.onAllergyChange } /> 
   */
  onAllergyChange = event => {
    this.setState({ allergy: event.target.value });
  };

  /**
   * The CaloriesChange event handler function
   * @param {*} event - The event that triggers the function
   * 
   * @example
   * <input onClick={ this.onCaloriesChange } /> 
   */
  onCaloriesChange = event => {
    this.setState({ calories: event.target.value });
  };

  /**
   * The ImageURLChange event handler funcition
   * @param {*} event - The event that triggers the function
   * 
   * @example
   * <input onClick={ this.onImageURLChange } /> 
   */
  onImageURLChange = event => {
    this.setState({ imageURL: event.target.value });
  };

  /**
   * Fetches "waiterAddMenuItem" from the backend server
   * @async
   * 
   * @example
   * <input onClick={ this.onAddMenuItem } />
   */
  onAddMenuItem = () => {
    fetch("https://salty-falls-40763.herokuapp.com/waiterAddMenuItem", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        dish_name : this.state.dish_name,
        price : this.state.price,
        description : this.state.description,
        type : this.state.type,
        allergy : this.state.allergy,
        calories : this.state.calories,
        imageURL : this.state.imageURL
      })
    })
    .then(response => response.json())
    .then(alert("Menu item " + this.state.dish_name + " added."))
    .catch(err => console.error("error:" + err), 
      (this.err !== undefined) ? (
        alert("Unable to add menu item."),
        console.log(this.err)
      ) : (
        console.log("")
      )
    )
  }

 render() {
    return (
      <Popup 
        trigger={
          <button className = "br3 center nice-bold b ma1 pv2 input-reset col2 ba b--col2 bg-white grow pointer f6 di">
            Add new menu item 
          </button>
        }
        modal className=" bg-transparent o-90 br3 ba b--col1 shadow-5 center"
      >
        {close => (
          <div className="measure br3 ba b--col1 mv4 mw6 w-100 w-100-l">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f3 fw6 ph0 mh0 center nice-bold col1">Add Menu Item</legend>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 nice-bold col1">Dish Name</label>
                <input
                  className="pa2 input-reset near-black ba b--col1 ba bg-transparent hover w-100"
                  type="text"
                  name="text"
                  id="text"
                  onChange={this.onDishNameChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 nice-bold col1">Price (£)</label>
                <input
                  className="pa2 input-reset near-black ba b--col1 ba bg-transparent hover w-100"
                  type="number"
                  name="number"
                  id="number"
                  onChange={this.onPriceChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 nice-bold col1">Type</label>
                <input
                  className="pa2 input-reset near-black ba b--col1 ba bg-transparent hover w-100"
                  type="text"
                  name="text"
                  id="text"
                  onChange={this.onTypeChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 nice-bold col1">Description</label>
                <input
                  className="pa2 input-reset near-black ba b--col1 ba bg-transparent hover w-100"
                  type="text"
                  name="text"
                  id="text"
                  onChange={this.onDescriptionChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 nice-bold col1">Allergy</label>
                <input
                  className="pa2 input-reset near-black ba b--col1 ba bg-transparent hover w-100"
                  type="text"
                  name="text"
                  id="text"
                  onChange={this.onAllergynChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 nice-bold col1">Calories</label>
                <input
                  className="pa2 input-reset near-black ba b--col1 ba bg-transparent hover w-100"
                  type="number"
                  name="number"
                  id="number"
                  onChange={this.onCaloriesChange}
                />
              </div>
              <div className="mt3">
                <label className="db fw6 lh-copy f6 nice-bold col1">Image URL</label>
                <input
                  className="pa2 input-reset near-black ba b--col1 ba bg-transparent hover w-100"
                  type="text"
                  name="text"
                  id="text"
                  onChange={this.onImageURLChange}
                />
              </div>
            </fieldset>
            <div className="">
              <input
                onClick={this.onAddMenuItem}
                className="b ph3 col1 pv2 input-reset col1 ba b--col1 bg-transparent grow pointer f6 dib nice-bold"
                type="submit"
                value="Add new Menu Item"
              />
            </div>
            <button
              className=" nice-bold b ma1 pa2 input-reset col1 ba b--col1 bg-transparent grow pointer f6 dib"
              onClick={() => {
                console.log('modal closed ')
                close()
              }}
            >
              X
            </button>
          </div>
        )}
      </Popup>
    );
  }
}

export default AddMenuItemPopUp