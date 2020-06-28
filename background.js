console.log("content_script.js");
window.addEventListener("keyup", myFunc);

let mappings = {
    "\"" : "\"",
    "\(" : "\)",
    "\{" : "\}",
};

function myFunc(e) {

    for (let m in mappings){
        if (e.key === m){
            let tval = e.target.value;
            let caret = e.target.selectionStart;
            e.target.value = tval + mappings[m];
            e.target.selectionEnd = caret;
        }

    }

}