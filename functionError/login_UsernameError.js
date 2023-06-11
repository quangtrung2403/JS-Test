import showError from "./showError.js";
import fn_success from "./success.js";

// hàm xử lý input username nếu có lỗi xảy ra
function login_UsernameError(input) {
	let userNameError = false;
	let value = input.value.trim();
	if (!value) {
		input.style.outlineColor = "red";
		showError(input, "Trường đăng nhập không được bỏ trống.");
		userNameError = true;
		return;
	} else {
		input.style.outlineColor = "rgb(40, 170, 74)";
		fn_success(input);
	}
	if (value != "") {
		input.style.outlineColor = "red";
		showError(input, "Không tìm thấy thông tin đăng nhập hợp lệ.");
		userNameError = true;
		return;
	}
	return userNameError;
}

export default login_UsernameError;