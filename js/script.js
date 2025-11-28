// ===== Manejo de usuarios =====
function getUsers() {
  const users = localStorage.getItem("users");
  return users ? JSON.parse(users) : {};
}

function saveUsers(users) {
  localStorage.setItem("users", JSON.stringify(users));
}

// ===== Login =====
document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  const users = getUsers();

  if (users[user] && users[user] === pass) {
    localStorage.setItem("loggedIn", "true");
    localStorage.setItem("currentUser", user);
    document.getElementById("loginMessage").textContent = "¡Bienvenido, " + user + "!";
  } else {
    document.getElementById("loginMessage").textContent = "Credenciales incorrectas.";
  }
});

// ===== Registro =====
document.getElementById("registerBtn").addEventListener("click", function() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;

  if (!user || !pass) {
    document.getElementById("loginMessage").textContent = "Debes ingresar usuario y contraseña.";
    return;
  }

  const users = getUsers();

  if (users[user]) {
    document.getElementById("loginMessage").textContent = "El usuario ya existe.";
  } else {
    users[user] = pass;
    saveUsers(users);
    document.getElementById("loginMessage").textContent = "Usuario registrado con éxito. Ahora puedes ingresar.";
  }
});

// ===== Logout =====
document.getElementById("logoutBtn").addEventListener("click", function() {
  localStorage.removeItem("loggedIn");
  localStorage.removeItem("currentUser");
  document.getElementById("loginMessage").textContent = "Sesión cerrada.";
});

// ===== Generar QR =====
function generarQR() {
  const url = " https://arizmendijose3-gif.github.io/Tutorialmovil//"; // Cambia por la URL real de tu página o APK
  const qrContainer = document.getElementById("qr");
  qrContainer.innerHTML = ""; // Limpia el contenedor antes de generar
  new QRCode(qrContainer, {
    text: url,
    width: 200,
    height: 200
  });

}
