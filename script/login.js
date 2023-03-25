// ---------------------------------------------------------REGISTER SESSION
const register = document.getElementById("register");
register.onclick = daftar;

function daftar(e) {
  e.preventDefault();

  const name = document.getElementById("regname").value;
  const email = document.getElementById("regemail").value;
  const password = document.getElementById("regpass").value;

  // array
  let user = {
    Name: name,
    Email: email,
    Password: password,
  };

  localStorage.setItem("Users", JSON.stringify(user));

  // Peringatan
  alert("Registrasi berhasil.");
}
// ---------------------------------------------------------REGISTER SESSION

// ---------------------------------------------------------LOGIN SESSION
const masuk = document.getElementById("masuk");
masuk.onclick = masukk;

function masukk(e) {
  e.preventDefault();

  let emailLog = document.getElementById("logemail").value;
  let passwordLog = document.getElementById("logpass").value;

  let data = localStorage.getItem("Users");
  data = JSON.parse(data);

  if (data.Email === emailLog && data.Password === passwordLog) {
    alert("Berhasil Login");
    window.location = "about.html";
  } else {
    alert("Email atau Password salah");
  }
}
