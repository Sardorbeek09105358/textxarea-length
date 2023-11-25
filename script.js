
let textarea = document.getElementById("myTextarea");

textarea.addEventListener("input", function(){
    let words = textarea.value.trim("").split(" ");
    let wordCount = words.length;
    console.log("So'zlar soni: " + wordCount);
});











