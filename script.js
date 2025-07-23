function unlockGallery() {
  const password = document.getElementById('password-input').value;
  if (password === 'ikan goreng') {
    document.getElementById('lock-screen').style.display = 'none';
    document.getElementById('gallery').style.display = 'block';
  } else {
    document.getElementById('error-message').innerText = 'Password salah!';
  }
}
