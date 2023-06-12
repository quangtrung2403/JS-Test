function getSelectValues(select) {
	var result = [];
	var options = select && select.options;
	var opt;

	for (let i = 0; i < options.length; i++) {
		opt = options[i];

		if (opt.selected) {
			result.push(opt.value || opt.text);
		}
	}
	return result;
}

export default getSelectValues;