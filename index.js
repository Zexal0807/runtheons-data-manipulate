const DataManipulate = require("./DataManipulate");

module.exports = new class {
	encode(data) {
		return DataManipulate.encode(data);
	}

	decode(data) {
		return DataManipulate.decode(data);
	}
}