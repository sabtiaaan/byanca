function unlockGallery() {
  const password = document.getElementById("password-input").value.toLowerCase();
  const validPasswords = ["lari pagi", "laripagi"]; // daftar jawaban benar
  if (validPasswords.includes(password)) {
    document.getElementById("lock-screen").style.display = "none";
    document.getElementById("gallery").style.display = "block";
  } else {
    document.getElementById("error-message").textContent = "Password salah gaes!";
  }
}
