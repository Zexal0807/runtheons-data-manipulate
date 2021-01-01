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