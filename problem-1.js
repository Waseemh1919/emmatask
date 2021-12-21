const example1 = [
    "hello world",
    "this is a test",
    "this is an example"
];

function pushUniqueChars(chars, arr) {
    const length = chars.length;
    for (let i = 0; i < length; ++i) {
        const char = chars[i];
        if (arr.indexOf(char) === -1) {
            arr.push(char);
        }
    }
}

function getCommonChars(arr) {
    const result = [];
    const length = arr.length;
    for (let i = 0; i < length; ++i) {
        pushUniqueChars(arr[i], result);
    }
    return result;
}

const result = getCommonChars(example1);

console.log(result);
