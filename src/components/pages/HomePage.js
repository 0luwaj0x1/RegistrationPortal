import React from 'react';
import { Link } from 'react-router-dom'
import Modal from '../Modal'




const HomePage = () => {


  return (
    <div>
      <div className="header">
          <img src="img/vreg-logo.svg" alt="" className="logo" />
          <button className="btn btn-alt margin-right-sm">Login</button>
          <button className="btn btn-standard">VIN Verification</button>
      </div>
    <div className="content">
   <div className="banner">
       <div className="banner__details">
                <div className="banner__details-pry">
                    <h1>Welcome to V-reg</h1>
                    <p>Vehicle registration is amied at ensuring an end-to-end automation of imported cars(new & faily used) verification processes in Nigeria</p>
                </div>
                <div className="banner__details-sec">
                    <h4>i am importing a new vehicle</h4>
                    <p>Vehicle registration aimed at ensuring an end-to-end automation of imported cars (new & faily used) verification processes</p>
                    <div className="banner__details-icons">
                        <img src="img/Group 3.svg" alt="icon 1" />
                        <img src="img/Group 6.svg" alt="icon 2" />
                    </div>
                </div>
                <div className="banner__details-sec">
                    <h4>i am importing a new vehicle</h4>
                    <p>Vehicle registration aimed at ensuring an end-to-end automation of imported cars (new & faily used) verification processes</p>
                    <div className="banner__details-icons">
                        <img src="img/Group 3.svg" alt="icon 1" />
                        <img src="img/Group 6.svg" alt="icon 2" />
                    </div>
                </div>
       </div>
       <div className="banner__img">
            <img src="img/home-img.png" alt="home page image" />
       </div>
   </div>
</div>
   
</div>
  );
};

export default HomePage;