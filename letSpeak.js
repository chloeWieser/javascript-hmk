// Leetspeak
// Write a function leetspeak which is given a string, and returns the leetspeak equivalent of the string. To convert text to its leetspeak version, make the following substitutions:

// A => 4 
// E => 3 
// G => 6 
// I => 1 
// O => 0 
// S => 5 
// T => 7

// leetspeak('Leet')
// l337

// function leetSpeak(word){
    
// // make a character map with an object/dictionary    // 
//     let map={
//         A:4,
//         E:3,
//         G:6,
//         I:1,
//         O:0,
//         S:5,
//         T:7

//     }
//     let convertedWord = ""

//     for(let i=0; i<word.length; i++){
//         let char=word[i];//will give us initially 'l'

//         if(char.toUpperCase() in map){  //WE'RE CHECKING TO SEE IF THAT char IS IN OUR MAP, SO WE NEED TO GET THE VALUE OF THE KEY
//             let keyValue = map[char.toUpperCase()] //map [E] = 3
//             convertedWord = convertedWord + keyValue;
//         }

//         else{
//             convertedWord= convertedWord + char; //convertedword = '1'
//         }

//         return convertedWord;

// }
// let result = leetspeak("leet")
// console.log(result)

function leetSpeak(word){  

    let map = {
        A : 4,
        E : 3,
        G : 6,
        I: 1, 
        O: 0,
        S: 5,
        T:7
    }

    let convertedWord = "" //
    //leet
    //0123
    //   |

    for(let i = 0; i< word.length; i++){// i = 3
        let char = word[i]; // t

        if(char.toUpperCase() in map){ // T in map

            let keyValue = map[char.toUpperCase()] //map[T] = 7
            convertedWord = convertedWord + keyValue;//converted = "l337"
        }
        else{
            convertedWord= convertedWord + char; //covertedWord = "l"
        }

    }

    return convertedWord;

}


let result = leetSpeak("leet")
console.log(result);