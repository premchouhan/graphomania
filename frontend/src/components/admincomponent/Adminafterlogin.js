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
          <h1>Publish your passions, your way</h1>
          <h6>“Create a unique and beautiful blog easily.”.</h6>
         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/w/wp1843760.jpg"
            alt="MUSIC"
          />
          <Carousel.Caption>
          
          <h1>Know your audience</h1>
            
            <h4> “Find out which posts are a hit with Blogger’s built-in analytics. 
            You’ll see where your audience is coming from and what they’re interested in.
             You can even connect your blog directly to Google Analytics for a more detailed look.”</h4>

        </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/w/wp1843777.jpg"
            alt="FOOD"
            />
          
          <Carousel.Caption>
          <h2>Hang onto your memories</h2>
            <p>
            “Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp1843761.jpg"
            alt="NATURE"
          />
  
          
          <Carousel.Caption>
          <h3>Join millions of others</h3>
            <p>“ Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger.
               Sign up to discover why millions of people have published their passions here.”</p>
               </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/wp/wp1843787.jpg"
            alt="CINEMA"
          />
          <Carousel.Caption>
          <h1>Create a beautiful blog that fits your style.</h1>
            <p>“Remember that happiness is a way of travel, not a destination.”</p>
      
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