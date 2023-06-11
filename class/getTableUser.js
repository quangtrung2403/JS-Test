export class TableUser {

	constructor(tableId, thead, tbody) {
		this.tableId = tableId;
		this.thead = thead;
		this.tbody = tbody;
	}
	createTable() {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})

		let table = document.createElement("table");
		table.setAttribute("class", "table mt-4")
		table.id = this.tableId;
		if (this.thead && this.thead.length > 0) {
			let thead = document.createElement("thead");
			let tr = document.createElement("tr");
			for (let i = 0; i < this.thead.length; i++) {
				let th = document.createElement("th");
				th.textContent = this.thead[i];
				tr.appendChild(th);
			}
			thead.appendChild(tr);
			table.appendChild(thead);
		}
		if (this.tbody && this.tbody.length > 0) {
			let tbody = document.createElement("tbody");
			for (let i = 0; i < this.tbody.length; i++) {
				let dateTimeParts = this.tbody[i].created_at.split("T")[0];
				let dateCr = dateTimeParts.split("-")
				let time = dateCr[2] + "-" + dateCr[1] + "-" + dateCr[0]
				let tr = document.createElement("tr");
				let roles = "";
				for (let j = 0; j < this.tbody[i].roles.length; j++) {
					roles +=
						`
				<span class="text__note" style="background-color: ${this.tbody[i].roles[j].meta.color}" id="${this.tbody[i].roles[j].id}">${this.tbody[i].roles[j].name}</span>
			`;
				}
				tr.id = this.tbody[i].id;
				tr.innerHTML += `
					<td>${this.tbody[i].name}</td>
					<td>${this.tbody[i].username}</td>
					<td>${this.tbody[i].mobile}</td>
					<td>${this.tbody[i].inactive}</td>
					<td>${roles}</td>
					<td>${time}</td>
					<td>
						<div class="selectButton">
							<i class="fa-solid fa-pen-to-square ms-1 me-3 updateButton" style="cursor: pointer;" data-bs-toggle="modal"
							data-bs-toggle="tooltip" data-bs-placement="bottom" title="Cập Nhật"
							data-bs-target="#updateUser"></i>
							<i class="fa-regular fa-trash-can deleteButton" style="cursor: pointer;" data-bs-toggle="modal"
							data-bs-toggle="tooltip" data-bs-placement="bottom" title="Xóa"
							data-bs-target="#deleteUser"></i>
						</div>
					</td>
				`;
				tbody.appendChild(tr);
			}
			table.appendChild(tbody);
		}
		return table;
	}
}