setTimeout(function() {
  chrome.runtime.sendMessage({}, function() {});
}, 5000);
