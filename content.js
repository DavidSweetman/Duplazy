console.log("content_script.js");
window.addEventListener("keyup", duplicate);

// Map of values to listen for in text input along with the corresponding value to add
let mappings = {
    "\"" : "\"",
    "\(" : "\)",
    "\{" : "\}",
    "\[" : "\]",
};

//Function to add corresponding value when keypress event value is one of mapped values
function duplicate(keyPress) {

    for (let m in mappings){
        if (keyPress.key === m){
            let textval = keyPress.target.value;
            let caretPosition = keyPress.target.selectionStart;
            keyPress.target.value = textval + mappings[m];
            //Reset caret position to previous position after character is added
            keyPress.target.selectionEnd = caretPosition;
        }

    }

}