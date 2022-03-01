

//below is my corrected one and following that is Tri's solution- both are correct

var numStars=5

function printSquare(numStars){
    var count=1;
    while (count <= numStars){
        console.log("*".repeat(numStars)) //i was trying to do ("*" * numStars) and this was resulting in a NaN! BC ITS NOT A NUMBER
        count++ //i had this in python before: count+=1

    }
}
printSquare(5)//I was doing an extra console log down here, which was resulting in an 'undefuned' showinf up at the bttm of my printed result



// function printSquare(numStars){
//     var count=1;
//     while (count <= numStars){
//         var printRows="*".repeat(numStars);
//         console.log(printRows)
//         count++

//     }
// }
// printSquare(5)