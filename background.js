let extensionActive = false;

// function to update badge
function updateBadge(extensionActive) {
  if (extensionActive) {
    chrome.action.setBadgeText({text: '['});
    chrome.action.setBadgeBackgroundColor({color: '#00FF00'}); // set badge to green
  } else {
    chrome.action.setBadgeText({ text: 'x' });
    chrome.action.setBadgeBackgroundColor({ color: '#FF0000' }); // Red
  }
}

// Load initial state from storage
function loadState() {
  chrome.storage.local.get(['extensionActive'], (result) => {
    extensionActive = result.extensionActive || false;
    updateBadge(extensionActive);
  });
}

// Save state to storage
function saveState() {
  chrome.storage.local.set({extensionActive});
}

// inject content script if not already injected
function sendMessage(tab) {
    chrome.tabs.sendMessage(tab.id, {action: 'toggleExtension', extensionActive: extensionActive}, (response) => {
      if (chrome.runtime.lastError) {
        console.log("Error sending current state to content script: ", chrome.runtime.lastError.message);
      } else {
      console.log("Current state sent to content script, response: ", response);
      }
    }); 
  }

// Get initial state  
loadState();

// Toggling logic with action button 
chrome.action.onClicked.addListener((tab) => {
  // console.log("Icon clicked!"); // Log to verify the icon click
  
  // toggle extension state
  extensionActive = !extensionActive;
  updateBadge(extensionActive);
  saveState(); // Save new state to storage

  // Notify content script
  sendMessage(tab);
});

// Listener for messages from content scripts
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'getState') {
    chrome.storage.local.get(['extensionActive'], (result) => {
      sendResponse({extensionActive: result.extensionActive || false});
    });
    return true; // Keep the message channel open for async response
  }
});