import showError from "./showError.js";
import fn_success from "./success.js";

function checkUserName(input) {

	let isUsernameError = false;

	let value = input.value.trim();
	if (!value) {
		isUsernameError = true;
		showError(input, `Trường tên đăng nhập không được bỏ trống`);
		return;
	} else {
		fn_success(input);
	}
	return isUsernameError;
}

export default checkUserName;