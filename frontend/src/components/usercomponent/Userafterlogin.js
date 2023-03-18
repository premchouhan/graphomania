//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT REACT
import React from "react";
import Navbar from "../nav/Navbar"
import Carousel from 'react-bootstrap/Carousel';
//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Userafterlogin() {
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
            src="https://wallpapercave.com/w/wp1843775.jpg"
            alt="WRITER"
          />
          <Carousel.Caption>
          <h5>Publish your passions, your way</h5>
          <h5>“Create a unique and beautiful blog easily.”.</h5>
         
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/w/wp1843770.jpg"
            alt="MUSIC"
          />

          <Carousel.Caption>
            <h1>Know your audience</h1>
            
            <p> “Find out which posts are a hit with Blogger’s built-in analytics. 
            You’ll see where your audience is coming from and what they’re interested in.
             You can even connect your blog directly to Google Analytics for a more detailed look.”</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/w/wp1843765.jpg"
            alt="FOOD"
            />
          
          <Carousel.Caption>
            <h1>Hang onto your memories</h1>
            <p>
            “Save the moments that matter. Blogger lets you safely store thousands of posts, photos, and more with Google.”
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/w/wp1843764.jpg"
            alt="NATURE"
          />
  
          
          <Carousel.Caption>
            <h1>Join millions of others</h1>
            <p>“ Whether sharing your expertise, breaking news, or whatever’s on your mind, you’re in good company on Blogger.
               Sign up to discover why millions of people have published their passions here.”</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img height="450"
            className="d-block w-100"
            src="https://wallpapercave.com/w/wp1843762.jpg"
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

//STEP 3 -- EXPORT IT TO USE IT
export default Userafterlogin