import showError from "./showError.js";
import fn_success from "./success.js";

function login_PasswordError(input) {
	let value = input.value.trim();
	let passwordError = false;
	if (!value) {
		input.style.outlineColor = "red";
		showError(input, "Trường mật khẩu không được bỏ trống.");
		passwordError = true;
		return;
	} else {
		input.style.outlineColor = "rgb(40, 170, 74)";
		fn_success(input);
	}
	return passwordError;
}

export default login_PasswordError;