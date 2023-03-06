//FUNCTIONAL COMPONENT
//STEP 1 -- IMPORT
import React from "react";
import Navbar from '../nav/Navbar'
import './contact/contactus.css'
//STEP 2 -- CREATE FUNCTIONAL COMPONENT
function Contactus() {
    return (
        <div>
             <Navbar/>        
<div className="size">

  <div class="container">
    <div class="content">
      <div class="left-side">
        <div class="address details">
          <i class="fas fa-map-marker-alt"></i>
          <div class="topic">Address</div>
            <div class="text-one">Asansol, </div>
          <div class="text-two">PX82+66Q, Vivekananda Sarani, Opp. Jubilee Petrol Pump, Kanyapur, West Bengal 713305</div>
        </div>
        <div class="phone details">
          <i class="fas fa-phone-alt"></i>
          <div class="topic">Phone</div>
          <div class="text-one">+91 9064733701</div>
          <div class="text-two">+91 6203865693</div>
        </div>
        <div class="email details">
          <i class="fas fa-envelope"></i>
          <div class="topic">Email</div>
          <div class="text-one">chouhanprem7136@gmail.com</div>
          <div class="text-two">trina@gmail.com</div>
        </div>
      </div>
      <div class="right-side">
        <div class="topic-text">Send us a message</div>
        <p>If you have any work from me or any types of quries related to my tutorial,
             you can send me message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div class="input-box">
          <input type="text" placeholder="Enter your name"/>
        </div>
        <div class="input-box">
          <input type="text" placeholder="Enter your email"/>
        </div>
        <div class="input-box message-box">
          <input type="text" placeholder="Enter your message"/>
        </div>
        <div class="button">
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
    </div>
  </div>

</div>

        </div>
    )
}
//STEP 3 -- EXPORT IT TO USE IT
export default Contactus