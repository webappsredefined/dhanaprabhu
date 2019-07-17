import React from "react";
import "../styles/homepage.scss";

const HomePage = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Chicken</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Mutton</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">Fish</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">SeaFood</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">BestSellers</h1>
            <span className="subtitle">Order Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
