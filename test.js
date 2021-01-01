const dataManipulate = require("./index");

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
console.log(new Date());
var encodedData = dataManipulate.encode(data);
var decodedData = dataManipulate.decode(encodedData)
console.log(new Date());
data = JSON.stringify(data);
data = JSON.parse(data);
console.log(new Date());
console.log(data);