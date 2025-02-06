import { useState } from "react";
import banner1 from "../img/banner.png";
import banner2 from "../img/banner2.png";
import "./Home.css";

const banners = [banner1, banner2]; // 배너 이미지 배열

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalBanners = banners.length; // 배너 개수

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalBanners);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + totalBanners) % totalBanners
    );
  };

  return (
    <div>
      <header className="header">
        <div className="HeadContainer">
          <nav>
            <a href="/home">Home</a>
            <a href="/Shop">Shop</a>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
            <a href="/Cart">Cart</a>
            <a href="/Top">Top</a>
            <a href="/Pants">Pants</a>
            <a href="/AddProduct">AddProduct</a>
          </nav>
        </div>
      </header>
      <main>
        <div id="Slider">
          <div
            id="SliderTrack"
            style={{
              width: `${totalBanners * 100}%`, // 배너 개수에 맞게 width 설정
              transform: `translateX(-${currentIndex * (100 / totalBanners)}%)`,
            }}
          >
            {banners.map((banner, index) => (
              <div key={index} className="AdBanner">
                <img src={banner} alt={`광고배너 ${index + 1}`} />
              </div>
            ))}
          </div>
          <button id="Prev" onClick={prevSlide}>
            {"<"}
          </button>
          <button id="Next" onClick={nextSlide}>
            {">"}
          </button>
        </div>
      </main>
      <footer>
        <div className="FooterContainer">
          <p>2025 new shopping store. Thank you.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
