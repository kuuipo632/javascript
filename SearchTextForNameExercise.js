/*jshint multistr:true */
text = "Blah blah blah blah blah blah Tom \
blah blah blah Tom blah blah Tom blah blah \
blah blah blah blah blah Tom";
var myName = "Tom";
var hits = [];
for(var i = 0; i < text.length; i++){
    if(text[i] === myName.substr(0, 1)){
        for(var j = i; j < i + myName.length; j++){
            hits.push(text[j]);
            }
}}
if(hits.length === 0){
    console.log("Your name wasn't found!");}
    else{
        console.log(hits);
    }
