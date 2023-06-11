import showError from "./showError.js";
import fn_success from "./success.js";

function checkPasswordError(input) {
	let isPasswordError = false;
	let value = input.value.trim();
	// kiểm tra rỗng
	if (!value) {
		isPasswordError = true;
		showError(input, `Trường mật khẩu không được bỏ trống`);
		return;
	} else {
		fn_success(input);
	}

	// mật khẩu phải có  Tối thiểu tám ký tự,
	if (value.length < 8) {
		isPasswordError = true;
		showError(input, `Mật khẩu phải có ít nhất 8 ký tự`);
		return;
	} else { // >= 8
		const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
		isPasswordError = !regexPassword.test(value);
		if (regexPassword.test(value)) {
			fn_success(input);
		} else {
			showError(input, "Vui lòng chỉ sử dụng chữ cái (a-z và A-Z), số (0-9), ít nhất một chữ cái, chữ cái in hoa, số và các ký tự đặc biệt như !@#$%^&*.()");
			return;
		}
		fn_success(input);
	}

	return isPasswordError;
}

export default checkPasswordError;