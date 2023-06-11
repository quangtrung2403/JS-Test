// nếu ko còn lỗi sẽ ẩn thẻ báo lỗi
function fn_success(input) {
	let parent = input.parentElement;
	let children = parent.querySelector(".error");
	children.innerHTML = "";
}

export default fn_success