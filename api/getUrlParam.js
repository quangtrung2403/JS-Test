import { endpoint, routers } from "./router.js";
import { currentPage, itemsPerPage, search } from "./param.js";

let urlLogin = endpoint + routers.login;
let urlUser = endpoint + routers.listUsers;
urlUser += '?with=roles,createdBy&paginate=true&page=' + currentPage
	+ '&itemsPerPage=' + itemsPerPage
	+ '&search=' + search;

let urlRoles = endpoint + routers.roles;
let urlUpdate = endpoint + routers.updateUser;
let urlDelete = endpoint + routers.deleteUser;
let urlInfo = endpoint + routers.user_info;
let urlLogOut = endpoint + routers.log_out;
let urlPassword = endpoint + routers.user_info +"/password";
let urlSearch = endpoint + routers.listUsers;
urlSearch += '?with=roles,createdBy&paginate=true&page=' + currentPage + '&itemsPerPage=' + itemsPerPage + '&search=';
;

export { urlLogin, urlUser, urlRoles, urlUpdate, urlDelete, urlInfo, urlLogOut, urlPassword , urlSearch }