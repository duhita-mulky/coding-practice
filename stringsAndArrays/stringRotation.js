// check if a string is a rotation of substring

const isStringRotation = function(s1, s2) {
    if(s1.length !== s2.length || s1.length === 0) {
        return false;
    } else {
        const newStr = s1 + s2;
        return isSubstring(newStr, s2);
    }
}

const isSubstring = function(s1, s2) {
    return s1.includes(s2);
}