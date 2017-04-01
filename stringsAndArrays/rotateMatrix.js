// rotate an NxN matrix 90 degrees

const rotateMatrix = function(matrix) {
    if (matrix.length === 0 || matrix[0].length !== matrix.length) return;

    for(let i = 0; i<matrix.length/2; i++) {
        let firstIndex = i;
        let lastIndex = matrix.length -1 -i;
        for(let j=firstIndex; j< lastIndex; j++) {
            let offset = j - firstIndex;
            let temp = matrix[firstIndex][j];
            matrix[firstIndex][j] = matrix[lastIndex - offset][firstIndex];
            matrix[lastIndex - offset][firstIndex] = matrix[last][lastIndex - offset];
            matrix[last][lastIndex - offset] = temp;
        }
    }
}