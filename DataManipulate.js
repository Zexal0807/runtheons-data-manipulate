module.exports = new class DataManipulate {

    static ENCODE_TAG = "runtheonsEncoder";

    encode(data) {
        var encoded = {};
        if (typeof data == "object") {
            Object.keys(data).forEach(k => {
                var value = data[k];
                var encodedValue;
                switch (typeof value) {
                    case 'object':
                        encodedValue = this.encode(value);
                        break;
                    case 'array':
                        break;
                    case 'string':
                        encodedValue = this.encodeString(value);
                        break;
                    case 'null':
                        encodedValue = this.encodeNull();
                        break;
                    case 'undefined':
                        encodedValue = this.encodeUndefined();
                        break;
                    case 'boolean':
                        encodedValue = this.encodeBoolean(value);
                        break;
                    case 'number':
                        encodedValue = this.encodeNumber(value);
                        break;
                }
                encoded[k] = encodedValue;
            });
        }
        addEncodeTag(data);
        return encoded;
    }

    addEncodeTag(data) {
        data[DataManipulate.ENCODE_TAG] = "GINOPIPPO";
    }


}