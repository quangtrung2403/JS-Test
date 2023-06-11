// hiển thị báo lỗi cho người dùng

function showError(input, message) {
	let parent = input.parentElement;
	let children = parent.querySelector(".error");
	children.innerHTML = message;
}

export default showError;