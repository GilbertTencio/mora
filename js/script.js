let passwordInput = "";
const correctPassword = "240125";

document.addEventListener("DOMContentLoaded", () => {
    updateCounter();
});

function addNumber(num) {
    if (passwordInput.length < 6) {
        passwordInput += num;
        document.getElementById("password").value = passwordInput;
    }
}

function clearPassword() {
    passwordInput = "";
    document.getElementById("password").value = "";
}

function checkPassword() {
    if (passwordInput === correctPassword) {
        document.getElementById("overlay").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    } else {
        alert("Contraseña incorrecta");
        clearPassword();
    }
}

function updateCounter() {
    const startDate = new Date(2024, 0, 25);
    const today = new Date();
    const diffTime = Math.abs(today - startDate);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    document.getElementById("contador").innerText = `${diffDays} días`;
}

function showPhotos(month) {
    const photoGallery = document.getElementById("photos");
    photoGallery.innerHTML = `<p>Fotos de ${month}</p>`;
    // Aquí puedes agregar lógica para mostrar imágenes dinámicamente
}
