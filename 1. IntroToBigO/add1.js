function addUpTo(n){
    let total=0;
    for(let i=0; i<=n; i++){
        total +=i;
    }
    return total;
}

// console.log(addUpTo(6));
var now = require("performance-now");

var time1 = now();
addUpTo(1000000000);
var time2 = now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)