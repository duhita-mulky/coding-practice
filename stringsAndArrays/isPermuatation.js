
// sort(str1Arr)
// sort(str2Arr)
// check equality
const isPermutation = function(str1, str2) {
    if (str1.length !== str1.length) return false;
    const sorted1 = str1.split('').sort();
    const sorted2 = str2.split('').sort();
    return sorted1 === sorted2;
}