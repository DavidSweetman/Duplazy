console.log("content_script.js");
window.addEventListener("keyup", duplicate);

let mappings = {
    "\"" : "\"",
    "\(" : "\)",
    "\{" : "\}",
};

function duplicate(keyPress) {

    for (let m in mappings){
        if (keyPress.key === m){
            let textval = keyPress.target.value;
            let caretPosition = keyPress.target.selectionStart;
            keyPress.target.value = textval + mappings[m];
            keyPress.target.selectionEnd = caretPosition;
        }

    }

}