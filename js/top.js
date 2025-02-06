document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("top-list"); // 상품을 표시할 컨테이너
  const storedProducts = JSON.parse(localStorage.getItem("top")) || []; // 로컬 스토리지에서 데이터 가져오기

  container.innerHTML = "";

  // 저장된 상품 데이터 렌더링
  storedProducts.forEach((product) => {
    const productElement = `
      <div class="item">
        <img src="${product.imageUrl}" alt="${product.name}" />
        <p>${product.name}</p>
        <p>${product.price}</p>
        <button class="add-cart">Add Cart</button>
      </div>
    `;
    container.innerHTML += productElement;
  });
});
