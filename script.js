const captchaBox = document.querySelector(".captcha");

const loginBtn = document.querySelector(".login-btn");

function generateCaptcha() {

    const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

    let code = "";

    for (let i = 0; i < 5; i++) {

        code += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }

    captchaBox.innerText = code;
}

generateCaptcha();

document
.querySelector(".captcha-row button")
.addEventListener("click", generateCaptcha);

loginBtn.addEventListener("click", () => {

    const mobile =
    document.getElementById("mobile").value;

    const password =
    document.getElementById("password").value;

    const captchaInput =
    document.getElementById("captchaInput").value;

    if (mobile.length !== 10) {

        alert("Enter valid mobile number");
        return;
    }

    if (captchaInput !== captchaBox.innerText) {

        alert("Invalid Captcha");
        return;
    }

    if (password.length < 4) {

        alert("Enter valid password");
        return;
    }

    alert("Login Successful");

    window.location.href = "form.html";

});