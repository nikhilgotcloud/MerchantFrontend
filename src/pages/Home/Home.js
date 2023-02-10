import React from 'react';
import{BsCartPlus} from "react-icons/bs";
import {Link} from "react-router-dom";
import "./Home.scss";
import heroImg from "../../assets/inv-img.png";
import { ShowOnLogin, ShowOnLogout } from '../../components/protect/hiddenLinks';


const Home = () => {
  return (
    <div className='home'>
        <nav className="conatiner --flex-between">
         <div className="logo">
          <BsCartPlus size={35}/>
         </div>
         <ul className="home-links">
          <ShowOnLogout>
          <li>
            <Link to="/register">Register</Link>
          </li>
          </ShowOnLogout>
          <ShowOnLogout>
          <li>
            <button className="--btn --btn-primary">
            <Link to="/login">Login</Link>
            </button>
           
          </li>
          </ShowOnLogout>
          <ShowOnLogin>
          <li>
            <button className="--btn --btn-primary">
            <Link to="/dashboard">Dashboard</Link>
            </button>
           
          </li>
          </ShowOnLogin>
         </ul>
        </nav>
        {/* HERO SECTION */}
      <section className="container hero">
        <div className="hero-text">
          <h2>{"𝘊𝘈𝘙𝘛+"} : One Stop Solution to list your products</h2>
          <p>
            List you products and manage your stocks on Ecommerce Website With bulit in text editor, Store Stats, and much more with {"𝘊𝘈𝘙𝘛+"} .  
          </p>
          <div className="hero-buttons">
            <button className="--btn --btn-secondary">
              <Link to="/dashboard">Start Your Trial Now</Link>
            </button>
          </div> 
          <div className="--flex-start">
            <NumberText num="10K" text="Active Users" />
            <NumberText num="5K" text="Brand Owners" />
            <NumberText num="100+" text="Partners" />
          </div>
        </div>

        <div className="hero-image">
          <img src={heroImg} alt="Inventory" />
        </div>
      </section>
    </div>
  )
};
const NumberText = ({ num, text }) => {
  return (
    <div className="--mr">
      <h3 className="--color-white">{num}</h3>
      <p className="--color-white">{text}</p>
    </div>
  );
};

export default Home;