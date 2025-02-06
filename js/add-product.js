document.getElementById("add-product-form").addEventListener("submit", (e) => {
  e.preventDefault(); // 기본 폼 제출 방지

  // 입력된 값 가져오기
  const category = document.getElementById("product-category").value;
  const name = document.getElementById("product-name").value;
  const price = document.getElementById("product-price").value;
  const imageFile = document.getElementById("product-image").files[0];

  // 이미지 파일이 없거나 다른 필드가 비어 있는 경우 처리
  if (!name || !price || !imageInput.files[0]) {
    alert("모든 필드를 입력해 주세요.");
    return;
  }

  // 이미지 URL 생성
  const imageUrl = URL.createObjectURL(imageInput.files[0]);

  // 상품 정보 객체 생성
  const productHTML = `
    <div class="item">
      <img src="${imageUrl}" alt="${name}" />
      <p>${name}</p>
      <p>${price}원</p>
      <button class="add-cart">Add Cart</button>
    </div>
  `;

  // 선택한 HTML 파일에 데이터 추가 (로컬 스토리지 활용)
  const products = JSON.parse(localStorage.getItem(category)) || [];
  products.push(productHTML);
  localStorage.setItem(category, JSON.stringify(products));

  alert(`${category} 페이지에 상품이 추가되었습니다!`);
  document.getElementById("add-product-form").reset();
});
