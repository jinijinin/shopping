document
  .getElementById("add-top-product-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const productName = document.getElementById("new-top-product").value.trim();
    const productImage = document.getElementById("new-top-product-image")
      .files[0];

    if (!productName || !productImage) {
      alert("상품 이름과 이미지를 모두 입력하세요.");
      return;
    }

    const productList = document.getElementById("top-products");

    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    // 이미지 파일 처리
    const reader = new FileReader();
    reader.onload = function (e) {
      const productImg = document.createElement("img");
      productImg.src = e.target.result;
      productImg.alt = productName;
      productImg.classList.add("product-img");
      productDiv.appendChild(productImg);
    };
    reader.readAsDataURL(productImage);

    // 상품 이름 추가
    const productNameElement = document.createElement("p");
    productNameElement.textContent = productName;
    productNameElement.classList.add("product-name");
    productDiv.appendChild(productNameElement);

    // 삭제 버튼 추가
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "삭제";
    deleteButton.classList.add("delete-button");
    deleteButton.addEventListener("click", function () {
      productDiv.remove(); // 상품 항목 삭제
    });
    productDiv.appendChild(deleteButton);

    // 상품 목록에 추가
    productList.appendChild(productDiv);

    // 입력 필드 초기화
    document.getElementById("new-top-product").value = "";
    document.getElementById("new-top-product-image").value = "";
  });
