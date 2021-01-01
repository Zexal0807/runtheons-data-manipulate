module.exports = new class DataManipulate {

    static ENCODE_ARRAY = "runtheonsArray"
    static ENCODE_OBJECT = "runtheonsObject";

    encode(value) {
                switch (typeof value) {
                    case 'object':
                var encoded = {};
                //For object and array
                if (Array.isArray(value)) {
                    var i = 0;
                    value.forEach(e => {
                        encoded[i] = this.encode(e);
                        i++
                    });
                    this.addEncodeTag(encoded, DataManipulate.ENCODE_ARRAY);
                } else {
                    Object.keys(value).forEach(k => {
                        encoded[k] = this.encode(value[k]);
                    });
                    this.addEncodeTag(encoded, DataManipulate.ENCODE_OBJECT);
                }
                return encoded;
                    case 'string':
                return this.encodeString(value);
                    case 'undefined':
                return this.encodeUndefined();
                    case 'boolean':
                return this.encodeBoolean(value);
                    case 'number':
                return this.encodeNumber(value);
        }
    }

    addEncodeTag(data, tag) {
        data['runtheonsManipulate'] = tag;
    }

    static ENCODE_STRING = "S";
    static ENCODE_BOOLEAN = "B";
    static ENCODE_UNDEFINED = "U";
    static ENCODE_INTEGER = "I";
    static ENCODE_FLOAT = "F";

    encodeString(value) {
        return value + DataManipulate.ENCODE_STRING;
    }
    encodeBoolean(value) {
        return value + DataManipulate.ENCODE_BOOLEAN;
                }
    encodeNumber(value) {
        if (Number.isInteger(value))
            return value + DataManipulate.ENCODE_INTEGER;
        else
            return value + DataManipulate.ENCODE_FLOAT;
    }
    encodeUndefined() {
        return DataManipulate.ENCODE_UNDEFINED;
    }
            });
        }
        addEncodeTag(data);
        return encoded;
    }

    addEncodeTag(data) {
        data[DataManipulate.ENCODE_TAG] = "GINOPIPPO";
    }


}