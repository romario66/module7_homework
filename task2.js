function isOwnProperty(obj, str) {
    return obj.hasOwnProperty(str);
}

function isOwnProperty(obj, str) {
    for (const key of Object.keys(obj)) {
        if (key === str) return true;
    }
    return false;
}

