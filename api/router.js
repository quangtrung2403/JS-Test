const endpoint = "https://httpdl.howizbiz.com/api/";

const routers = {
	login: "web-authenticate",
	user_info: "me",
	listUsers: "users",
	updateUser: "users/",
	roles: "roles",
	deleteUser: "users/",
	log_out: "web-logout"
}

export { endpoint, routers }