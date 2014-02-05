// JavaScript Document
// create variable that holds the raw input text string
var inputStr = "Blah blah blah blah blah blah Tom blah blah blah Tom blah blah Tom blah blah blah blah blah blah blah Tom";
var myName = "Tom";
// Convert the string into an array of words
var b = inputStr.split(' ');

// display the resulting array
console.log(b);
// filter the array to return array elements that equal myName
var hits = b.filter(function(val)
{
   return val === myName;
}
);
//display results
if(hits.length === 0){
    console.log("Your name wasn't found!");}
    else{
        console.log(hits);
    }
