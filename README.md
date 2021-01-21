# runtheons-data-manipulate

# Index

- [Introduction](https://github.com/Zexal0807/runtheons-data-manipulate#introduction "Introduction")
- [Getting started](https://github.com/Zexal0807/runtheons-data-manipulate#getting-started "Getting started")
	- [Prerequisites](https://github.com/Zexal0807/runtheons-data-manipulate#prerequisites "Prerequisites")
	- [Installation](https://github.com/Zexal0807/runtheons-data-manipulate#installation "Installation")
- [Use](https://github.com/Zexal0807/runtheons-data-manipulate#use "Use")
- [Example of use](https://github.com/Zexal0807/runtheons-data-manipulate#example-of-use "Example of use")
- [Summary System structure](https://github.com/Zexal0807/runtheons-data-manipulate#summary-system-structure "Summary System structure")

# Introduction
This package add and encode method for frontEnd and a decode method for backEnd

This repository contains the source code and official documentation of the endpoints validator system. If the aforementioned documentation is not clear or contains errors, please report it immediately to the email address **bugs-documentation@runtheons.com** or report the issue here on GitHub. Please be extremely clear and precise in the description of the issue so that moderators can correct it as soon as possible.

# Getting started


## Prerequisites

1. Git
2. Node: any 14.x version starting with v14.5.0 or greater

## Installation

1. `npm install https://github.com/Zexal0807/runtheons-data-manipulate` to add the package to the project

# Use

At frontEnd you must call the encode function, and then from backEnd you myst call decode function

```js
Object encode(Object data)
```

```js
Object decode(Object data)
```

# Example of use

```javascript
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

var encoded = encode(data);
var decoded = decode(data);

console.log(Object.toJSON(data) == Object.toJSON(decoded));

Result:
	true
```


# Summary System structure
- root
	- index.js > Export of the dataManipulate
