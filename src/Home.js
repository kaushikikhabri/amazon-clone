import React from 'react';
import "./Home.css";
import Product from './Product';

function Home() {
    return (
      <div className='home'>
        <div className='home__container'>
          <img className='home__image' src="/primevideo-img.png" alt="Prime Video" />
  
          <div className='home__row'>
          <Product 
              id="764672145" 
              title="The Innovator's Dilemma: When New Technologies Cause Great Firms to Fail" 
              price={199} 
              image="https://m.media-amazon.com/images/I/714ec6Pwt0L._AC_UF1000,1000_QL80_.jpg"
              rating={4} 
          />
  
          <Product 
              id="764672147" 
              title="Zero to One: Notes on Startups, or How to Build the Future" 
              price={249} 
              image="https://images.squarespace-cdn.com/content/v1/57b27c5be58c62b96df66901/1473465907195-2PYHSO17XEO9QLRJMGSA/zero-one-inside.jpg" 
              rating={5} 
          />
          
          </div>
  
          <div className='home__row'>
          <Product 
              id="764672150" 
              title="The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers" 
              price={279} 
              image="https://m.media-amazon.com/images/I/810u9MkT3SL._AC_UF1000,1000_QL80_.jpg" 
              rating={4} 
          />
          <Product 
              id="764672143" 
              title="Lean Analytics: Use Data to Build a Better Startup Faster" 
              price={199} 
              image="https://m.media-amazon.com/images/I/81Az4KZxF7L._AC_UF1000,1000_QL80_.jpg" 
              rating={3} 
          />
          
          <Product 
              id="764672149" 
              title="Crossing the Chasm: Marketing and Selling High-Tech Products to Mainstream Customers" 
              price={229} 
              image="https://m.media-amazon.com/images/I/81jRhPA6SQL._AC_UF1000,1000_QL80_.jpg" 
              rating={4} 
          />
          </div>
  
          <div className='home__row'>
              <Product 
                  id="764672141" 
                  title="The Art of Startup Fundraising: Pitching Investors and Raising Capital" 
                  price={219} 
                  image="https://m.media-amazon.com/images/I/71a1C3NIY1L._AC_UF1000,1000_QL80_.jpg" 
                  rating={5} 
              />
          </div>
          
        </div>
      </div>
    );
  }
  

export default Home;
