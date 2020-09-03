//first we need to idetify the function
function reverse_the_number(number){
    //then change the variable to a string
    number = number + "";
    //and then split the string before reserving and then joining it together again
    return number.split("").reverse().join("")
}
//this is just to consol.log the result
console.log(reverse_the_number(12345));

//////////////////////////////////////


//Same goes on here but with words
function reverse_the_words(words){
    words = words + "";
    return words.split("").reverse().join("")
}

console.log(reverse_the_words("Jhon Ate Apples"));


////////////////////////////////////////


function reverse_my_name(name) {
    name = name + "";
    return name.split("").reverse().join("")
}

console.log(reverse_my_name("Mohammed Arafat"));