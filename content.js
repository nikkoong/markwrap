
console.log("Extension loaded.");

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'toggleExtension') {
        extensionActive = request.extensionActive;
        console.log(`Extension is now ${request.extensionActive ? 'active' : 'inactive'}`);
        sendResponse({ status: 'success', extensionActive: extensionActive});
    }
  });

// Wrap the selected text
function wrapSelectedText(key, activeElement,start, end) {
    try
    {
        if (activeElement)
        { 
            // console.log(activeElement.tagName);      
            const selectedText = activeElement.value.substring(start,end)
            if (selectedText) 
                {
                    let wrappedText;
                    switch (key) 
                    {
                        case '"':
                            wrappedText = `"${selectedText}"`;
                            break;
                        case '[':
                            wrappedText = `[${selectedText}]()`;
                            break;
                        case '{':
                            wrappedText = `{${selectedText}}`;
                            break;
                        case '*':
                            wrappedText = `*${selectedText}*`;
                            break;
                        case '_':
                            wrappedText = `_${selectedText}_`;
                            break;
                        case '$':
                            wrappedText = `$${selectedText}$`;
                            break;
                        case '`':
                            wrappedText = `\`${selectedText}\``;
                            break;
                        case '=':
                            wrappedText = `==${selectedText}==`;
                            break;
                        case '~':
                            wrappedText = `~~${selectedText}~~`;
                            break;
                        case '(':
                            wrappedText = `(${selectedText})`;
                            break;
                        case '!':
                            wrappedText = `![${selectedText}]()`;
                            break;
                        }
                    activeElement.setRangeText(wrappedText, start, end, 'end');
                    if (key === '[' || '!') {
                        const modCursorPos = start + wrappedText.length - 1;
                        // set cursor position to be inside the parentheses
                        activeElement.setSelectionRange(modCursorPos,modCursorPos)
                    }
                }
        }
    } catch (error)
    {
        console.error("Error wrapping selected text: ", error);
    }
}

// Listen for keydown events when the extension is active
document.addEventListener('keydown', function(event) {
    if (extensionActive && ['"', '[', '{', '*', '_', '$', '`', '=', '~', '(','!'].includes(event.key)) {
        const activeElement = document.activeElement;
        // console.log(event.key);
        console.log(activeElement.tagName);
        const start = activeElement.selectionStart;
        const end = activeElement.selectionEnd;
        // console.log(start, end);
        // Exit function if no text is selected
        if (start == end) {
            return;
        }
        event.preventDefault(); // Prevent the default key action
        wrapSelectedText(event.key, activeElement, start, end);
    }
  });

// Request initial state from background script
chrome.runtime.sendMessage({action: 'getState'}, (response) => {
if (response) {
    extensionActive = response.extensionActive;
    console.log(`Extension state from storage is set to ${extensionActive}`)
}
});
