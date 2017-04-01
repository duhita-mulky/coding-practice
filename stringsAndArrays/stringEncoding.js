// string encoding

var encoding = function(input) {
    var outputString = '';
    var arr = input.split('');
    var count = 1;
    for(i=0; i<input.length; i++) {
        if(arr[i] === arr[i+1]) {
            count++;    
        } else {
            outputString += count + arr[i];
            count = 1;
        }
    }
    return outputString;
}
