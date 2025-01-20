document.getElementById('add-top-product-form').addEventListener('submit', function(event) {
  event.preventDefault();

  const productName = document.getElementById('top-product').value;
  const productPrice = document.getElementById('top-price').value;
  const productImage = document.getElementById('top-product-image').files[0];

  // 이미지 파일을 base64로 변환하여 저장
  const reader = new FileReader();
  reader.onloadend = function() {
    const product = {
      name: productName,
      price: productPrice,
      image: reader.result // base64로 인코딩된 이미지
    };

    // 상품 목록을 동적으로 추가
    const productList = document.getElementById('top-list');

    const productItem = document.createElement('div');
    productItem.classList.add('item');

    const productImg = document.createElement('img');
    productImg.src = product.image;
    productImg.alt = product.name;

    const productText = document.createElement('p');
    productText.textContent = `${product.name} - ${product.price}원`;

    const addCartButton = document.createElement('button');
    addCartButton.classList.add('add-cart');
    addCartButton.textContent = 'Add Cart';

    productItem.appendChild(productImg);
    productItem.appendChild(productText);
    productItem.appendChild(addCartButton);

    productList.appendChild(productItem);

    // 폼 초기화
    document.getElementById('add-top-product-form').reset();
  };

  if (productImage) {
    reader.readAsDataURL(productImage);
  }
});
