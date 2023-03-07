import "./header.css";
// import Navbar from "../../components/nav/Navbar";
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
      </div>
    </>
  );
}
