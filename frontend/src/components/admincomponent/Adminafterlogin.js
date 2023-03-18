//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import { Navigate } from "react-router-dom";
import Navbar from '../nav/Navbar'
import Carousel from 'react-bootstrap/Carousel';


//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Adminafterlogin() {
    let usertype = sessionStorage.getItem('utype')
    //let usertype = localStorage.getItem('utype')

    if (usertype == null) {
        return (<Navigate to="/adminlogin" />)
    }
    else {
        return (
            <div>
            <Navbar />
            
            <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Your Story Your Words</span>
          <span className="headerTitleLg">🅶🆁🅰🅿🅷🅾🅼🅰🅽🅸🅰</span>
        </div>
      </div>
      <Carousel>
        
        <Carousel.Item>
          
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/w/wp1843758.jpg"
            alt="TRAVEL"
          />
          <Carousel.Caption>
            <h1>TRAVEL</h1>
            <p>“Remember that happiness is a way of travel, not a destination.”</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/w/wp1843760.jpg"
            alt="MUSIC"
          />
          <Carousel.Caption>
            <h1>MUSIC</h1>
            <p>“Music is the language of the spirit. It opens the secret of life bringing peace, abolishing strife.”.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/w/wp1843777.jpg"
            alt="FOOD"
            />
          
          <Carousel.Caption>
            <h1>FOOD</h1>
            <p>
            “Food for us comes from our relatives, whether they have wings or fins or roots. That is how we consider food. Food has a culture. It has a history. It has a story. It has relationships.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/w/wp383359.jpg"
            alt="NATURE"
          />
  
          
          <Carousel.Caption>
            <h1>NATURE</h1>
            <p>“Rest is not idleness, and to lie sometimes on the grass under trees on a summer's day, listening to the murmur of the water, or watching the clouds float across the sky, is by no means a waste of time.”</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/w/wp1843799.jpg"
            alt="CINEMA"
          />
          <Carousel.Caption>
            <h1>CINEMA</h1>
            <p>"Cinema is an art form, a result of dedication of a number of people."</p>
      
          </Carousel.Caption>
      
        </Carousel.Item>
      
      </Carousel>
            
            <>
      {/* <Navbar /> */}
    
      
    </>
        </div>
        )
    }


}

//STEP 3 -- EXPORT IT TO USE IT
export default Adminafterlogin