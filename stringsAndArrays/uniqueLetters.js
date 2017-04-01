
const uniqueLetters = function(input){
    const strArr = input.split('');
    let res = {};
    for(let i=0;i<strArr.length;i++) {
        const x = strArr[i];
        if (res[x]) return false;
        else res[x] = true;
    }
    return true;
}