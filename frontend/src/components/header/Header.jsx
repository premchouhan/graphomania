import "./header.css";
// import Navbar from "../../components/nav/Navbar";
import Navbar from "../../components/topbar/Topbar";
import Topbar from "../../components/topbar/Topbar";
import Carousel from 'react-bootstrap/Carousel';
export default function Header() {
  return (
    <>
      {/* <Navbar /> */}
      <Topbar />
      <div className="header">
        <div className="headerTitles">
          <h1 className="headerTitleSm">Your Story Your Words</h1>
          <p className="headerTitleLg">🅶🆁🅰🅿🅷🅾🅼🅰🅽🅸🅰</p>
        </div>
      </div>
    </>
  );
}
