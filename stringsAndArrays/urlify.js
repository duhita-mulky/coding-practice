// convert all the spaces in the string to %20


const urlify = function(str) {
    const strArr = str.split('');
    let res = '';
    for(let i=0;i<strArr.length;i++) {
        if(strArr[i] === ' ') {
            res += '%20';
        } else {
            res += strArr[i]
        }
    }
    return res;
}