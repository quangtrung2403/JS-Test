import showError from "./showError.js";
import fn_success from "./success.js";

function checkconfirmPassword(password, confirmpassword) {
	let correctAnswer = false;
	if (password.value !== confirmpassword.value) {
		showError(confirmpassword, "Mật khẩu không trùng khớp");
		correctAnswer = true;
	} else {
		fn_success(confirmpassword);
	}
	return correctAnswer;
}

export default checkconfirmPassword;