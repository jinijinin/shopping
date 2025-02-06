import React, { useEffect, useState } from "react";
import "./Cart.css";

// 로컬스토리지에서 카트 데이터를 가져오는 함수
function getCartItems() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : []; // 저장된 항목이 없으면 빈 배열 반환
}

// 로컬스토리지에 카트 데이터를 저장하는 함수
function saveCartItems(cartItems) {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

const Cart = () => {
  const [cartItems, setCartItems] = useState(getCartItems());

  // 카트 항목 삭제 함수
  const removeItemFromCart = (index) => {
    const updatedCartItems = cartItems.filter(
      (_, itemIndex) => itemIndex !== index
    ); // 해당 항목만 제거
    setCartItems(updatedCartItems); // 상태 업데이트
    saveCartItems(updatedCartItems); // 로컬스토리지에 저장
  };

  useEffect(() => {
    // 페이지가 로드될 때 카트 항목을 렌더링하도록 useEffect 사용
    setCartItems(getCartItems());
  }, []);

  return (
    <div>
      <header className="header">
        <div className="HeadContainer">
          <h1>Shopping</h1>
          <nav>
            <a href="/home">Home</a>
            <a href="/shop">Shop</a>
            <a href="/login">Login</a>
            <a href="/signup">Signup</a>
            <a href="/cart">Cart</a>
            <a href="/top">Top</a>
            <a href="/pants">Pants</a>
            <a href="/add-product">Add</a>
          </nav>
        </div>
      </header>
      <main>
        <section id="cart-section">
          <h2>내 카트</h2>
          <ul id="cart-items">
            {cartItems.length === 0 ? (
              <p>카트에 상품이 없습니다.</p>
            ) : (
              cartItems.map((item, index) => (
                <li key={index} className="cart-item">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <p className="cart-item-name">{item.name}</p>
                  <p className="cart-item-price">{item.price}</p>
                  <button
                    className="remove-cart"
                    onClick={() => removeItemFromCart(index)}
                  >
                    Remove
                  </button>
                </li>
              ))
            )}
          </ul>
        </section>
      </main>
      <footer className="footer-container">
        <p>2025 New Shopping Store. Thank you for visiting!</p>
      </footer>
    </div>
  );
};

export default Cart;
