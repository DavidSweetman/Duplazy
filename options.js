function save_options() {

    let Quote = document.getElementById('Quote').checked;
    let Braces = document.getElementById('Braces').checked;
    let Parentheses = document.getElementById('Parentheses').checked;
    let Bracket = document.getElementById('Bracket').checked;

    chrome.storage.sync.set({
        quote: Quote,
        brace: Braces,
        parentheses: Parentheses,
        bracket: Bracket
    }, function() {
        // Update status to let user know options were saved.
        let status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(function() {
            status.textContent = '';
        }, 750);
    });
}


// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    chrome.storage.sync.get({
        quote: true,
        brace: true,
        parentheses: true,
        bracket: true
    }, function(items) {
        document.getElementById('Quote').checked = items.quote;
        document.getElementById('Braces').checked = items.brace;
        document.getElementById('Parentheses').checked = items.parentheses;
        document.getElementById('Bracket').checked = items.bracket;
    });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);
