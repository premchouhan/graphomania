import "./header.css";
// import Navbar from "../../components/nav/Navbar";
import Navbar from "../../components/topbar/Topbar";
import Topbar from "../../components/topbar/Topbar";
export default function Header() {
  return (
    <>
      {/* <Navbar /> */}
      <Topbar />
      <div className="header">
        <div className="headerTitles">
          <span className="headerTitleSm">Your Story Your Words</span>
          <span className="headerTitleLg">🅶🆁🅰🅿🅷🅾🅼🅰🅽🅸🅰</span>
        </div>
        <img
          className="headerImg"
          src="https://images.pexels.com/photos/4240505/pexels-photo-4240505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
      </div>
    </>
  );
}
