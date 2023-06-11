import showError from "./showError.js";
import fn_success from "./success.js";

function checkQuyen(input) {
	let isQuyenError = false;
	let value = input.value.trim();
	if (!value) {
		isQuyenError = true;
		showError(input, `Quyền người dùng không được bỏ trống`);
		return;
	} else {
		fn_success(input);
	}
	return isQuyenError;
}

export default checkQuyen;