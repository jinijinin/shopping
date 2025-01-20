document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");
  const bestList = document.getElementById("best-list");

  // 상품 데이터 불러오기
  const loadProducts = async (url) => {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const products = Array.from(doc.querySelectorAll(".product-item"));
      productList.innerHTML = ""; // 기존 목록 초기화
      products.forEach((product) => {
        const listItem = document.createElement("li");
        listItem.textContent = product.textContent;
        const addButton = document.createElement("button");
        addButton.textContent = "추가";
        addButton.addEventListener("click", () => addToBest(product.textContent));
        listItem.appendChild(addButton);
        productList.appendChild(listItem);
      });
    } catch (error) {
      console.error("상품 데이터를 불러오는 중 오류 발생:", error);
    }
  };

  // BEST TOP 10에 추가
  const addToBest = (productName) => {
    if (bestList.children.length >= 10) {
      alert("BEST TOP 10은 최대 10개까지 선택 가능합니다.");
      return;
    }
    const bestItem = document.createElement("li");
    bestItem.textContent = productName;
    bestList.appendChild(bestItem);
  };

  // 상의 상품 불러오기
  document.getElementById("load-top").addEventListener("click", () => {
    loadProducts("top.html");
  });

  // 하의 상품 불러오기
  document.getElementById("load-pants").addEventListener("click", () => {
    loadProducts("pants.html");
  });
});
