import showError from "./showError.js";
import fn_success from "./success.js";

// kiểm tra email
function checkEmailError(input) {

	let isEmailError = false;

	let value = input.value.trim();

	if (!value) {
		isEmailError = true;
		showError(input, `Trường email không được bỏ trống`);
		return;
	} else {
		fn_success(input);
	}
	// kiểm tra định dạng email
	const regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	isEmailError = !regexEmail.test(value);
	if (regexEmail.test(value)) { // chuẩn dữ liệu định dạng email // hợp lệ
		fn_success(input);
	} else {
		showError(input, "email phải là một địa chỉ email hợp lệ");
		return;
	}
	return isEmailError;
}

export default checkEmailError;