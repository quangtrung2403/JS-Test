import { List } from "./class/createlist.js";
import { listData } from "./Array/listItem.js";
import { urlUser, urlRoles, urlUpdate, urlDelete, urlInfo, urlLogOut, urlPassword } from "./api/getUrlParam.js";
import { user } from "./Array/usertable.js";
import { TableUser } from "./class/getTableUser.js";
import { Data } from "./class/apigetData.js";
import getSelectValues from "./Array/getArraySelect.js";
import checkNameError from "./functionError/checkNameError.js";
import checkEmailError from "./functionError/checkEmailError.js";
import checkPhoneNumber from "./functionError/checkPhoneError.js";
import checkQuyen from "./functionError/checkRolesError.js";
import checkconfirmPassword from "./functionError/confirmPassword.js";
import checkUserName from "./functionError/checkusernameError.js";
import checkPasswordError from "./functionError/checkpassword.js";

let fn_delete = document.getElementById("fn_delete");
let navigation = document.getElementById("navigation");
let status_Search = document.getElementById("status-search");
let list_Status = document.getElementById("list-status");
let status_Label = document.getElementById("status-label");
let search_Quyen = document.getElementById("search-quyen");
let ulQuyen = document.getElementById("list_Quyen");
let select = document.getElementById("select-option");
let select_Value = document.getElementById("result");
let createNew = document.getElementById("createUser");
let create_Name = document.getElementById("name");
let username = document.getElementById("username");
let email = document.getElementById("email");
let phone = document.getElementById("phone");
let password = document.getElementById("password");
let password_Confirm = document.getElementById("password_Confirm");
let form_update = document.getElementById("form_update");
let id_Delete = document.getElementById("idDelete");
let update_Name = document.getElementById("update_Name");
let update_Username = document.getElementById("update_Username");
let update_Email = document.getElementById("update_Email");
let update_Phone = document.getElementById("update_Phone");
let update_Quyen = document.getElementById("update_Quyen");
let update_Select = document.getElementById("update_Select");
let updateButton = document.getElementById("updateButton");
let delete_Username = document.getElementById("delete_Username");
let card_profile = document.getElementById("card-profile");
let userLogin = document.getElementById("userLogin");
let avatar_login = document.getElementById("avatar_login");
let name_login = document.getElementById("name_login");
let introducstion = document.getElementById("introducstion");
let file = document.getElementById("file");
let log_Out = document.getElementById("log_Out");
let left_Content = document.getElementById("left-content");
let right_Content = document.getElementById("right-content");
let content_user__img = document.getElementById("content_user__img");
let changePassword = document.getElementById("changePassword");
let newpassword = document.getElementById("newpassword");
let sendnewPassword = document.getElementById("sendnewPassword");
let content__second = document.getElementById("content__second");

function listitem() {
	let list_DanhSach = new List(listData);
	let listElement = list_DanhSach.createList();
	navigation.innerHTML = listElement.outerHTML;
	let li = navigation.getElementsByTagName("li");
	for (let i = 0; i < li.length; i++) {
		li[i].addEventListener("click", (event) => {
			let clickedItem = event.target.id;
			if (clickedItem === "clickUser") {
				window.location = "http://127.0.0.1:5500/#/he-thong/nguoi-dung";
				document.getElementById("showCustom").style.display = "block";
			}
		})
	}
}

status_Search.addEventListener("click", () => {
	status_Label.style.color = "red";
	list_Status.style.display = "block";
	let ul = document.getElementById("list-status--child");
	let li = ul.getElementsByTagName("li");
	for (let i = 0; i < li.length; i++) {
		li[i].addEventListener("click", () => {
			let content = li[i].innerText;
			status_Search.value = content;
			list_Status.style.display = "none";
			status_Label.style.color = "black";
		})
	}
})

async function renderUser() {
	let dataUser = new Data(urlUser);
	let response = await dataUser.getData();
	let data = response.list;
	let tableUser = new TableUser("tableUser", user, data);
	let text = tableUser.createTable();
	document.getElementById("showUser").innerHTML = text.outerHTML;
	let updateButton = document.querySelectorAll('.updateButton');
	updateButton.forEach((button) => {
		button.addEventListener("click", (event) => {
			let tr = event.target.closest("tr");
			let id = tr.id;
			form_update.id = id;
			update_Quyen.value = "";
			const xhttp = new XMLHttpRequest();
			xhttp.onload = () => {
				let dataUpdate = JSON.parse(xhttp.responseText);
				update_Name.value = dataUpdate.name;
				update_Username.value = dataUpdate.username;
				update_Email.value = dataUpdate.email;
				update_Phone.value = dataUpdate.mobile;
				for (let i = 0; i < dataUpdate.roles.length; i++) {
					update_Quyen.value += `${dataUpdate.roles[i].name}` + "  ";
				}
			}
			xhttp.open("GET", urlUpdate + `${id}`);
			xhttp.setRequestHeader("Content-type", "application/json");
			xhttp.setRequestHeader("Authorization", " Bearer " + localStorage.getItem("token"));
			xhttp.send();
		});
	});
	let deleteButton = document.querySelectorAll('.deleteButton');
	deleteButton.forEach((button) => {
		button.addEventListener("click", (event) => {
			let tr = event.target.closest("tr");
			let id = tr.id;
			id_Delete.id = id;
			let text = tr.getElementsByTagName("td")[1].innerText;
			delete_Username.innerHTML = text;
		});
	});
}


update_Quyen.addEventListener("click", () => {
	update_Select.style.display = "block";
})

async function selectUpdateQuyen() {
	let updateRoles = new Data(urlRoles);
	let data = await updateRoles.getData();
	for (let i = 0; i < data.length; i++) {
		update_Select.innerHTML += `<option value="${data[i].id}" class="option-style">${data[i].name}</option>`;
	}
}
update_Select.addEventListener("change", () => {
	var selectedOptions = Array.from(update_Select.selectedOptions).map(option => option.innerText);
	let text = selectedOptions.join(" ");
	update_Quyen.value = text;
})


async function renderQuyen() {
	let dataRoles = new Data(urlRoles);
	let data = await dataRoles.getData();
	let list = document.getElementById("list_Quyen");
	let ul = document.createElement("ul");
	ul.id = "list_Quyen--item";
	for (let i = 0; i < data.length; i++) {
		let li = document.createElement("li");
		li.setAttribute("id", data[i].id);
		li.setAttribute("class", "dataQuyen");
		li.appendChild(document.createTextNode(data[i].name));
		ul.appendChild(li);
	}
	list.appendChild(ul);
}

search_Quyen.addEventListener("click", () => {
	ulQuyen.style.display = "block";
})

select_Value.addEventListener("click", () => {
	select.style.display = "block";
});

async function selectQuyen() {
	let selectQuyen = new Data(urlRoles);
	let data = await selectQuyen.getData();
	for (let i = 0; i < data.length; i++) {
		select.innerHTML += `<option value="${data[i].id}" class="option-style">${data[i].name}</option>`;
	}
}

select.addEventListener("change", () => {
	// tạo 1 mảng chứa các giá trị từ option select
	var selectedOptions = Array.from(select.selectedOptions).map(option => option.innerText);
	let text = selectedOptions.join("  ");
	select_Value.value = text;
});

createNew.addEventListener("click", () => {
	const xhttp = new XMLHttpRequest();
	let crateNewData = {
		name: create_Name.value,
		username: username.value,
		email: email.value,
		mobile: phone.value,
		password: password.value,
		role_ids: getSelectValues(select),
	}
	xhttp.onload = () => {
		if (xhttp.status == 200) { // thành công ẩn popup và tự thêm mới user vào danh sách
			alert("Thêm mới người dùng thành công");
			$('#createNewUser').modal('hide');
			renderUser();
		} else {
			checkNameError(create_Name);
			checkUserName(username);
			checkEmailError(email);
			checkPhoneNumber(phone);
			checkPasswordError(password);
			checkconfirmPassword(password, password_Confirm);
			checkQuyen(select_Value);
		}
	}
	xhttp.open("POST", urlUser);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.setRequestHeader("Authorization", " Bearer " + localStorage.getItem("token"));
	xhttp.send(JSON.stringify(crateNewData));
})


updateButton.addEventListener("click", () => {
	const xhttp = new XMLHttpRequest();
	let userUpdate = {
		name: update_Name.value,
		username: update_Username.value,
		email: update_Email.value,
		id: form_update.id,
		phone: update_Phone.value,
		role_ids: getSelectValues(update_Select),
	}

	xhttp.onload = () => {
		JSON.parse(xhttp.responseText);
		if (xhttp.status == 200) {
			alert("Cập nhật Thông tin người dùng thành công")
			$("#updateUser").modal('hide');
			renderUser();
		} else {
			checkNameError(update_Name);
			checkEmailError(update_Email);
			checkPhoneNumber(update_Phone);
			checkQuyen(update_Select);
		}
	}
	xhttp.open("PUT", urlUpdate + `${form_update.id}`);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.setRequestHeader("Authorization", " Bearer " + localStorage.getItem("token"));
	xhttp.send(JSON.stringify(userUpdate));
});

fn_delete.addEventListener("click", () => {
	console.log(id_Delete.id);
	const xhttp = new XMLHttpRequest();
	xhttp.onload = () => {
		JSON.parse(xhttp.responseText);
		if (xhttp.status == 200) {
			alert("Bạn đã xóa dữ liệu thành công");
			renderUser();
		} else {
			alert("Xóa Dữ liệu không thành công");
		}
	}
	xhttp.open("DELETE", urlDelete + `${id_Delete.id}`);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.setRequestHeader("Authorization", " Bearer " + localStorage.getItem("token"));
	xhttp.send();
})

userLogin.addEventListener("click", () => {
	card_profile.style.display = "block";
})



function showUserDetail() {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = () => {
		let response = JSON.parse(xhttp.responseText);
		let data = response.user;
		let img = document.createElement("img");
		let p = document.createElement("p")
		img.setAttribute("id", "img_User");
		img.setAttribute("class", "mt-1");
		img.setAttribute("src", data.avatar_url);
		content_user__img.setAttribute("src", data.avatar_url);
		img.alt = "avatar_url";
		p.setAttribute("class", "ms-3 mt-3");
		p.innerText = data.name;
		userLogin.appendChild(img);
		userLogin.appendChild(p);
		avatar_login.setAttribute("src", data.avatar_url)
		name_login.innerText = data.name;
		introducstion.style.backgroundColor = data.role.meta.color;
		introducstion.innerText = data.role.name;
	}
	xhttp.open("GET", urlInfo);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.setRequestHeader("Authorization", " Bearer " + localStorage.getItem("token"));
	xhttp.send();
}
// log_Out
log_Out.addEventListener("click", () => {
	const xhttp = new XMLHttpRequest();
	xhttp.onload = () => {
		let reponse = JSON.parse(xhttp.responseText);
		localStorage.setItem("token", reponse.access_token);
		if (xhttp.status == 200) {
			window.location.href = "./login/login.html";
			alert("Bạn đã thoát tài khoản thành công");
		} else {
			alert("đăng xuất không thành công")
		}
	}
	xhttp.open("POST", urlLogOut);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.setRequestHeader("Authorization", " Bearer " + localStorage.getItem("token"));
	xhttp.send();
})

// hiện hồ sơ người login
file.addEventListener("click", () => {
	left_Content.style.display = "none";
	right_Content.style.display = "none";
	card_profile.style.display = "none";
	content__second.style.display = "block";
})

function readFile() {
	if (!this.files || !this.files[0]) return;
	const FR = new FileReader();
	FR.addEventListener("load", function (evt) {
		document.getElementById('b64').innerText = evt.target.result;
	});
	FR.readAsDataURL(this.files[0]);
}
document.querySelector("#icon_plus").addEventListener("change", readFile);

newpassword.addEventListener("click", () => {
	changePassword.style.display = "block";
})

sendnewPassword.addEventListener("click", () => {
	let password1 = document.getElementById("password1");
	let password2 = document.getElementById("password2");
	let password3 = document.getElementById("password3");
	const xhttp = new XMLHttpRequest();
	let passwordAfterChange = {
		password: password1.value,
		password_confirmation: password2.value,
		old_password: password3.value,
	}
	xhttp.onload = () => {
		if (xhttp.status == 200) {
			alert("Bạn đã đổi mật khẩu thành công");
			password1.value = "";
			password2.value = "";
			password3.value = "";
		} else {
			alert("Đổi mật khẩu không thành công")
		}
	}
	xhttp.open("PUT", urlPassword);
	xhttp.setRequestHeader("Content-type", "application/json");
	xhttp.setRequestHeader("Authorization", " Bearer " + localStorage.getItem("token"));
	xhttp.send(JSON.stringify(passwordAfterChange));
})

window.addEventListener("load", () => {
	showUserDetail();
	selectUpdateQuyen();
	selectQuyen();
	listitem();
	renderUser();
	renderQuyen().then(() => {
		let dataQuyen = document.getElementsByClassName("dataQuyen");
		for (let i = 0; i < dataQuyen.length; i++) {
			dataQuyen[i].addEventListener("click", () => {
				let ul = document.getElementById("list_Quyen");
				let icon = document.getElementById("icon");
				let label = document.getElementById("label_quyen");
				let content = dataQuyen[i].innerText
				search_Quyen.value = content;
				ul.style.display = "none";
				icon.style.display = "none";
				label.style.color = "black";
			});
		}
	});
});
