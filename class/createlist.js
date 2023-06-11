export class List {
	constructor(data) {
		this.data = data;
	}
	createList() {
		let ul = document.createElement("ul");
		ul.setAttribute("class", "navbar-nav me-auto");
		this.data.forEach(item => {
			ul.innerHTML += `
				<li style="cursor: pointer" class="nav-item d-flex mb-3" id="${item.id}"><i class="${item.icon}"></i>${item.name}</li>
			`;
		});
		return ul;
	}
}