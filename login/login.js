import { urlLogin } from "../api/getUrlParam.js";
import login_UsernameError from "../functionError/login_UsernameError.js";
import login_PasswordError from "../functionError/login_PasswordError.js";

let show_password = document.getElementById("open_password");
let hide_password = document.getElementById("hide-password");
let password = document.getElementById("password");
let username = document.getElementById("username");
let login_button = document.getElementById("login_button");
let loading_icon = document.getElementById("loading_icon");

// hiện mật khẩu
show_password.addEventListener("click", () => {
	show_password.style.display = "none";
	hide_password.style.display = "block";
	password.setAttribute("type", "text");
})
// ẩn mật khẩu
hide_password.addEventListener("click", () => {
	show_password.style.display = "block";
	hide_password.style.display = "none";
	password.setAttribute("type", "password");
});

// login
login_button.addEventListener("click", () => {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = () => {
		let access_token = xhttp.responseText;
		let token = JSON.parse(access_token);
		localStorage.setItem("token", token.access_token);
		if (xhttp.status == 200) { //nhập đúng user và id trùng vs access_token thì dc truy cập vào trang user html
			login_button.innerText = "";// ẩn chữ đăng nhập
			loading_icon.style.display = "block"; // hiện biểu tượng loading
			window.location.href = "../index.html";
		} else {
			login_UsernameError(username);
			login_PasswordError(password);
		}
	}
	xhttp.open("POST", urlLogin);
	xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	xhttp.send("username=" + username.value + "&password=" + password.value);
})