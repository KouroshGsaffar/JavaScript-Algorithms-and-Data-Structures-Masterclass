// function charCount(str){
//     // make object to return at the end
//     var result={};
//     // loop over string
//     for(var i=0; i<str.length; i++){
//         var char = str[i].toLowerCase();
//         //if char is a char/num AND is a key in object, add one
//         if(result[char]>0){
//             result[char]++;
//         }
//         else{
//             // else add the object and set the value to 1
//             result[char]=1;
//         };

//         // if the obj is somth else do not do anythg!
//     }

//     // return obj at the end 
//     return result;
// }

function charCount(str){
    var result={};
    for(var char of str){
        var char = char.toLowerCase();
        if(/[a-z0-9]/.test(char)){
            if(result[char]>0){
                result[char]++;
            }
            else{
                result[char]=1;
            };
            
        };
    }
    return result;
}




console.log(charCount("hello ASShole"))