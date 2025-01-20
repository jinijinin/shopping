document.getElementById("signup").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("signup-email").value;
  const password = document.getElementById("signup-password").value;
  const user = { email, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("회원가입 성공! 로그인해주세요.");
  window.location.href = "login.html";
});
