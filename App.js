import React from "react";
import ReactDOM from "react-dom/client";

/*
 * Header
 *   Logo
 *   NavItems
 *
 * Body
 *  - Search
 *  - RestaurntContainer
 *    - Restaurnt Cards
 *
 * Footer
 *   -Copyright
 *   - Links
 *   -Address
 *   -Contact
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="data:image/jpeg;base64,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"
        ></img>
      </div>

      <div className="nav-items">
        <ul>
          <li> Home </li>
          <li> About us </li>
          <li> Contact us </li>
          <li> Cart </li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/h4yqggh2menundndcrmc"
      />
      <h3>Santosham</h3>
      <h4>Dosa, South Indian, Asian </h4>
      <h4>3.7 stars</h4>
      <h4>22 minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restaurant-container">
        <RestaurantCard />  
        <RestaurantCard />  
        <RestaurantCard />  
        <RestaurantCard />  
        <RestaurantCard />  
        <RestaurantCard />  
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const rootElem = document.getElementById("root");

const root = ReactDOM.createRoot(rootElem);

root.render(<AppLayout />);
