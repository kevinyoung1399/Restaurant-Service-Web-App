import React, { Component } from "react";
import Particles from "react-particles-js";
import Welcome from "./components/Welcome/Welcome";
import Menu from "./components/Menu/Menu";
import Navigation from "./components/Navigation/Navigation";
import StaffSignIn from "./components/StaffSignIn/StaffSignIn";
import Register from "./components/Register/Register";
import Waiter from "./components/Waiter/Waiter";
import Kitchen from "./components/Kitchen/Kitchen";
import Manager from "./components/Manager/Manager";
import Customer from "./components/Customer/Customer";
import {bubbles} from "./components/Particles/Particles";
import "./App.css";

// so when you open the fresh app, these are the apps properties aka state
// when the user adds input e.g. change a page, login etc, properties change
const initialState = {
  input: "",
  route: "welcomePage",
  
  firstName: '',
  surname: '',
  email: '',
  tablesAssigned: 0,

  orderNumber: 0,
  tableNumber: 0,
  totalCost: 0,
  basketItems: []
};

/**
 * The App component of this React App
 * @author Kevin Young
 */
class App extends Component {
  // the app has the fresh properties above
  constructor() {
    super();
    this.state = initialState;
  }

  /**
   * Loads the waiter and sets the waiter information state
   * @param {*} firstName - The waiters firstname
   * @param {*} surname - The waiters surname
   * @param {*} email - The waiters email
   * 
   * @example
   * <Register loadWaiter={ this.loadWaiter } />
   */
  loadWaiter = (firstName, surname, email, tablesAssigned) => {
    this.setState({
      firstName: firstName,
      surname: surname,
      email: email,
      tablesAssigned : tablesAssigned
    })
  }

  /**
   * Loads the customer information and sets its state
   * @param {*} orderNumber - The customers order number 
   * @param {*} tableNumber - The customers table number
   * @param {*} basketItems - The customers basket items
   * @param {*} totalCost - The customers total cost
   * 
   * @example
   * <Register loadCustomer={ this.loadCustomer } />
   */
  loadCustomer = (orderNumber, tableNumber, basketItems, totalCost) => {
    this.setState({
        orderNumber: orderNumber,
        tableNumber: tableNumber,
        basketItems: basketItems,
        totalCost: totalCost
    })
  }

  /**
   * Handler function for navigation of pages (routes), sets the "route" state
   * @param route - The route to change to 
   * 
   * @example
   * <Menu route={ this.state.route } onRouteChange={ this.onRouteChange } />
   */
  onRouteChange = route => {
    this.setState({ route: route });
  };

  /**
   * Fetches the "customerGetMenu" from backend server and sets the "menuItems" state
   * @async
   * 
   * @example
   * function() { getMenu() }
   */
  getMenu = () => {
      fetch("https://salty-falls-40763.herokuapp.com/customerGetMenu", {
        method: "get",
        headers: { "Content-Type": "application/json" },
      })
      .then(menu => {
        var theMenu = (menu.json())
        this.setState({menuItems : theMenu});
        return theMenu;
      })
    };
    
  // the components that get displayed
  // depending on the route, different components are displayed
  render() {
    return (
      <div className="App">
        <Particles className="particles" params={bubbles} />
        <Navigation
          onRouteChange={this.onRouteChange}
          route = {this.state.route}
        />
        { this.state.route === "welcomePage" ? (
          <Welcome
            onRouteChange={this.onRouteChange}
          />
        ) : this.state.route === "menuPage" ? (
            <Menu 
              getMenu = {this.getMenu}
              onRouteChange={this.onRouteChange}
              loadCustomer={this.loadCustomer}
            />
        ) : this.state.route === "waiterPage" ? (
            <Waiter 
              firstName = {this.state.firstName}
              surname = {this.state.surname}
              email = {this.state.email}
              tablesAssigned = {this.state.tablesAssigned}
            />
        ) : this.state.route === "kitchenPage" ? (
            <Kitchen 
              firstName = {this.state.firstName}
              surname = {this.state.surname}
              email = {this.state.email}
            />

        ) : this.state.route === "managerPage" ? (
            <Manager 
              firstName = {this.state.firstName}
              surname = {this.state.surname}
              email = {this.state.email}
            />
        ) : this.state.route === "registerPage" ? (
            <Register
              loadWaiter={this.loadWaiter}
              onRouteChange={this.onRouteChange}
            />
        ) : this.state.route ==="staffSignInPage" ? (
            <StaffSignIn
              loadWaiter={this.loadWaiter}
              onRouteChange={this.onRouteChange}
            />
        ) : <Customer
              tableNumber = {this.state.tableNumber}
              orderNumber = {this.state.orderNumber}
              basketItems = {this.state.basketItems}
              totalCost = {this.state.totalCost}
          />
        }
      </div>
    );
  }
}

export default App;
