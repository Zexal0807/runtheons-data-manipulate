module.exports = new class DataManipulate {



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

    static ENCODE = "runtheonsManipulate";

    static ENCODE_ARRAY = "runtheonsArray"
    static ENCODE_OBJECT = "runtheonsObject";
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

    isObject(data) {
        if (
            data[DataManipulate.ENCODE] != undefined &&
            data[DataManipulate.ENCODE] == DataManipulate.ENCODE_OBJECT
        ) {
            return true;
        }
        return false;
    }

    isArray(data) {
        if (
            data[DataManipulate.ENCODE] != undefined &&
            data[DataManipulate.ENCODE] == DataManipulate.ENCODE_ARRAY
        ) {
            return true;
        }
        return false;
    }

    decode(data) {
        var decoded = {};
        if (this.isObject(data)) {
            Object.keys(data).forEach(k => {
                if (k != DataManipulate.ENCODE)
                    decoded[k] = this.decode(data[k]);
            });
        } else if (this.isArray(data)) {
            decoded = [];
            var i = 0;
            for (var i = 0; i < Object.keys(data).length - 1; i++) {
                decoded.push(this.decode(data[i]));
            }
        } else {
            var char = data.charAt(data.length - 1);
            var value = data.slice(0, -1);
            switch (char) {
                case DataManipulate.ENCODE_STRING:
                    return value;
                case DataManipulate.ENCODE_INTEGER:
                    return parseInt(value);
                case DataManipulate.ENCODE_FLOAT:
                    return parseFloat(value);
                case DataManipulate.ENCODE_BOOLEAN:
                    return value == 'true';
                case DataManipulate.ENCODE_UNDEFINED:
                    return undefined;
            }
        }
        return decoded;
    }

}