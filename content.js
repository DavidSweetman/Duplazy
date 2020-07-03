// Map of values to listen for in text input along with the corresponding value to add
let quoteMapping = {name: "quote", open:"\"", close:"\"", active:true };
let bracketMapping = {name: "bracket", open:"\[", close:"\]", active:true };
let braceMapping = {name: "brace", open:"\{", close:"\}", active:true };
let parenthesesMapping = {name: "parentheses", open:"\(", close:"\)", active:true };
let enabled = false;
chrome.storage.sync.get({ 'quote': false, 'brace': false, 'parentheses': false, 'bracket': false},
    function(items) {
        quoteMapping.active = items.quote;
        braceMapping.active = items.brace;
        parenthesesMapping.active = items.parentheses;
        bracketMapping.active = items.bracket;
        enabled = quoteMapping.active || braceMapping.active ||parenthesesMapping.active  || bracketMapping.active;
    });

let optionsMappings = [quoteMapping, braceMapping, bracketMapping, parenthesesMapping];

//Function to add corresponding value when keypress event value is one of mapped values
function duplicate(keyPress) {

    if (enabled){
        optionsMappings.forEach((obj) => {
            if (keyPress.key === obj.open && obj.active){
                let textval = keyPress.target.value;
                let caretPosition = keyPress.target.selectionStart;
                keyPress.target.value = textval + obj.close;

                //Reset caret position to previous position after character is added
                keyPress.target.selectionEnd = caretPosition;
            }
        });

    }

    }
window.addEventListener("keyup", duplicate);

