module.exports = new class {
    encode(data) {
        return JSON.stringify(data);
    }

    decode(data) {
        return JSON.parse(data);
    }
}