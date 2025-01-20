document.getElementById("login").addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("login-email").value;
  const password = document.getElementById("login-password").value;
  const user = { email, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("로그인 성공!");
  window.location.href = "home.html";
});
