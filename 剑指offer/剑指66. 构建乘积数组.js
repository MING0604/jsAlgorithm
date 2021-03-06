/**
 * @param {number[]} a
 * @return {number[]}
 */
var constructArr = function(a) {
    if(!a.length) return []
    let b = [];
    b[0] = 1;
    for(let i = 1; i < a.length; i++){
        b[i] = b[i - 1] * a[i - 1]
    }
    let temp = 1;
    for(let i = a.length - 2; i>=0; i--){
        temp *= a[i + 1]
        b[i] *= temp 
    }
    return b
};