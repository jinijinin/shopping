// 로컬스토리지에서 카트 데이터를 가져오는 함수
function getCartItems() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : []; // 저장된 항목이 없으면 빈 배열 반환
}

// 로컬스토리지에 카트 데이터를 저장하는 함수
function saveCartItems(cartItems) {
  localStorage.setItem("cart", JSON.stringify(cartItems));
}

// 카트 항목을 화면에 렌더링하는 함수
function renderCartItems() {
  const cartItems = getCartItems();
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // 기존 내용을 비움

  cartItems.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <img src="${item.image}" alt="${item.name}" style="width: 100px; height: auto;" />
      <p>${item.name}</p>
      <p>${item.price}</p>
      <button class="remove-cart" data-index="${index}">Remove</button>
    `;
    cartItemsContainer.appendChild(listItem);
  });

  // 삭제 버튼 이벤트 연결
  document.querySelectorAll(".remove-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.dataset.index;
      const updatedCartItems = getCartItems();
      updatedCartItems.splice(index, 1); // 항목 제거
      saveCartItems(updatedCartItems);
      renderCartItems(); // 화면 업데이트
    });
  });
}

// 페이지 로드 시 카트 항목 렌더링
document.addEventListener("DOMContentLoaded", renderCartItems);
