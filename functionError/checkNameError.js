import showError from "./showError.js";
import fn_success from "./success.js";

function checkNameError(input) {

	let isNameError = false;

	let value = input.value.trim();
	if (!value) {// == (kiểm tra value(fullname) có rỗng k // val("");
		isNameError = true;
		showError(input, `Trường tên không được bỏ trống`);
		return;
	} else {
		fn_success(input);
	}
	return isNameError;
}

export default checkNameError