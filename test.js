const dataManipulate = require("./DataManipulate");

var data = {
	id: 1,
	name: "Gino",
	phone: "030123456",
	email: "aaaaaaa@gmail.com",
	premiun: true,
	date: {
		year: 2021
	},
	father: undefined,
	list: [
		{ id: 1 },
		{ id: 2 }
	]
}
console.log("START ENCODE:" + (new Date()).getMilliseconds());
var encodedData = dataManipulate.encode(data);
console.log(encodedData);
console.log("END ENCODE:" + (new Date()).getMilliseconds());
var decodedData = dataManipulate.decode(encodedData)
console.log("END DECODE:" + (new Date()).getMilliseconds());

console.log(Object.toJSON(data) == Object.toJSON(decodedData));

console.log("START STRINGIFY:" + (new Date()).getMilliseconds());
data = JSON.stringify(data);
console.log("END STRINGIFY:" + (new Date()).getMilliseconds());
data = JSON.parse(data);
console.log("END PARSE:" + (new Date()).getMilliseconds());