import { useLocation } from "react-router";
import Header from "../../components/header/Header";
import Posts from "../../components/posts/Posts";
import Sidebar from "../../components/sidebar/Sidebar";
import "./homepage.css";
import Carousel from "../../components/carousel/carousel";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      <Header />
      <Carousel />

      <div className="home">
        <Posts />
        <Sidebar />
      </div>
    </>
  );
}
