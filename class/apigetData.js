export class Data {
	constructor(url) {
		this.url = url;
	}
	async getData() {
		const response = await fetch(this.url, {
			headers: {
				"Content-type": "application/json",
				"Authorization": "Bearer " + localStorage.getItem("token")
			}
		});
		const data = await response.json();
		return data;
	}
}