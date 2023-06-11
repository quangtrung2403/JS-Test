import showError from "./showError.js";
import fn_success from "./success.js";

function checkPhoneNumber(input) {
	let isPhoneError = false;
	let value = input.value.trim();

	// xử lý dạng chữ ==> số
	if (value != "") {
		if (isNaN(value)) {
			isPhoneError = true;
			showError(input, `Định dạng trường di động không hợp lệ`);
			return;
		} else {
			fn_success(input);
		}

		// xử lý sđt có 10 ký tự
		if (value.length > 11) {
			isPhoneError = true;
			showError(input, `Trường di động không được lớn hơn 11 ký tự`);
			return;
		} else {
			fn_success(input);
		}

		if (value.length < 10) {
			isPhoneError = true;
			showError(input, `Trường di động phải có tối thiểu 10 ký tự`);
			return;
		} else {
			fn_success(input);
		}
	}
	return isPhoneError;
}

export default checkPhoneNumber;