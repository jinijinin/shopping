const sliderTrack = document.getElementById("slider-track");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

let currentIndex = 0; // 현재 슬라이드 인덱스
const banners = document.querySelectorAll(".ad-banner"); // 배너 리스트
const totalBanners = banners.length; // 배너 총 개수

// 슬라이더 업데이트 함수
function updateSlider() {
  const offset = -currentIndex * 100; // 슬라이더 이동 거리 계산
  sliderTrack.style.transform = `translateX(${offset}%)`;
}

// 이전 버튼 클릭 이벤트
prevButton.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalBanners) % totalBanners;
  updateSlider();
});

// 다음 버튼 클릭 이벤트
nextButton.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalBanners;
  updateSlider();
});
