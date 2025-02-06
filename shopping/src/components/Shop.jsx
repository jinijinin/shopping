import React, { useEffect, useState } from "react";
import "./Shop.css";

// 카트를 로컬 스토리지에서 가져오는 함수
function getCartItems() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

// 카트를 로컬 스토리지에 저장하는 함수
function saveCartItems(cartItems) {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

const Shop = () => {
  const [productList, setProductList] = useState([]);
  const [bestList, setBestList] = useState([]);

  // 상품 데이터 불러오기
  const loadProducts = async (url) => {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const products = Array.from(doc.querySelectorAll(".product-item"));
      setProductList(products); // 상태에 상품 리스트 설정
    } catch (error) {
      console.error("상품 데이터를 불러오는 중 오류 발생:", error);
    }
  };

  // BEST TOP 10에 추가
  const addToBest = (productName) => {
    if (bestList.length >= 10) {
      alert("BEST TOP 10은 최대 10개까지 선택 가능합니다.");
      return;
    }
    setBestList((prevBestList) => [...prevBestList, productName]);
  };

  // 상의 상품 불러오기
  const loadTopProducts = () => {
    loadProducts("top.html");
  };

  // 하의 상품 불러오기
  const loadPantsProducts = () => {
    loadProducts("pants.html");
  };

  // 카트에 상품 추가
  const addToCart = (product) => {
    const currentCart = getCartItems();
    const updatedCart = [...currentCart, product]; // 상품을 카트에 추가
    saveCartItems(updatedCart); // 로컬 스토리지에 저장
  };

  return (
    <div className="content">
      <header className="header">
        <div className="HeadContainer">
          <h1></h1>
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

      <aside></aside>

      <article>
        <h2>BEST TOP 10</h2>
        <ul id="best-list">
          {bestList.map((product, index) => (
            <li key={index}>{product}</li>
          ))}
        </ul>
      </article>

      <div className="product-container">
        <div className="item">
          <img src="/img/top.jpg" alt="상품 1" />
          <p>40,000원</p>
          <button
            className="add-cart"
            onClick={() =>
              addToCart({
                name: "상품 1",
                price: "40,000원",
                image: "/img/top.jpg",
              })
            }
          >
            Add Cart
          </button>
        </div>
        <div className="item">
          <img src="/img/top.jpg" alt="상품 2" />
          <p>40,000원</p>
          <button
            className="add-cart"
            onClick={() =>
              addToCart({
                name: "상품 2",
                price: "40,000원",
                image: "/img/top.jpg",
              })
            }
          >
            Add Cart
          </button>
        </div>
      </div>

      <section id="admin-panel">
        <h3>상품 선택</h3>
        <div className="loading">
          <button onClick={loadTopProducts}>상의 상품 불러오기</button>
          <button onClick={loadPantsProducts}>하의 상품 불러오기</button>
        </div>
        <ul id="product-list">
          {productList.map((product, index) => (
            <li key={index}>
              {product.textContent}
              <button onClick={() => addToBest(product.textContent)}>
                추가
              </button>
            </li>
          ))}
        </ul>
      </section>

      <footer>
        <div className="footer-container">
          <p>2025 new shopping store. Thank you.</p>
        </div>
      </footer>
    </div>
  );
};

export default Shop;
