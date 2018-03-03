// console.log("hello sort exercise!");

let vals = [5,4,9,2,1];
console.log("vals: ", vals);

let alphaVals = ["a", "hello", "b", "goodbye"];
console.log("alphaVals", alphaVals);
alphaVals.sort();
console.log("alphaVals after .sort()", alphaVals);

// DEFAULT behavior of sort():
        // without any function inserted inside,
        //  it will numerically sort numbers in 
        //  an existing array or alphabetical order, 
        // favoring capital letters first with words
        // favoring numbers first before letters -- abCD465 -> 456CDab
    
vals.sort();

console.log("vals after .sort(): ", vals);
    // sort() acts on the array itself 
    // instead of making a new array 

let arrOfObjsVals = [{x: 2, y: 10}, {x: 5,y: 6}];
console.log("arrOfObjsVals: ", arrOfObjsVals);
// you can write your own sorting behavior by 
// putting a function inside the sort method

// it expects an argument named comparer that compares

//compare requires two arguments, two elements of the array
//it is your job to say which goes before the other
    // ** you communicate this by returning a true or false 
    // ** value from an expression

// To compare numbers instead of strings, the compare function 
// can simply subtract b from a. The following function will
//  sort the array ascending (if it doesn't contain Infinity and NaN):

    // t = ["0324", "300"];
    // t.sort()
    // >> ["0324", "300"]

    // function compareNums(a,b) { return a - b; }

    // t.sort(compareNums)
    // >> ["300", "0324"]






// let's say you want to compare two objects by their "y" values :
// 10a - 6b will return true
// 
//  compare function 
    // takes two elements in the array and compares them

function compare(a, b){
    console.log(a.y - b.y);
    console.log(a.y);
    return a.y - b.y;
}

arrOfObjsVals.sort(compare);







