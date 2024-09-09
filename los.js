// Switch between login and register screens
document.getElementById('go-to-register').addEventListener('click', function() {
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('register-screen').style.display = 'flex';
});

document.getElementById('go-to-login').addEventListener('click', function() {
  document.getElementById('register-screen').style.display = 'none';
  document.getElementById('login-screen').style.display = 'flex';
});

// Handle login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const username = document.getElementById('username').value;
  document.getElementById('display-username').innerText = username;
  document.getElementById('login-screen').style.display = 'none';
  document.getElementById('main-page').style.display = 'block';
});

// Handle register form submission
document.getElementById('register-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const password = document.getElementById('register-password').value;
  const confirmPassword = document.getElementById('confirm-password').value;

  if (password === confirmPassword) {
    document.getElementById('register-screen').style.display = 'none';
    document.getElementById('login-screen').style.display = 'flex';
  } else {
    alert('As senhas não correspondem!');
  }
});
