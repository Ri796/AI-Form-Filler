console.log("AI Form Filler content script loaded!");

// This function contains our simple, rule-based logic.
const fillFormWithProfile = (profile) => {
  // Find all input elements on the page that are text, email, tel, etc.
  const inputs = document.querySelectorAll('input[type="text"], input[type="email"], input[type="tel"], input:not([type])');

  // Define our simple rules.
  // The 'keys' are keywords to look for.
  // The 'value' is the corresponding profile data key.
  const rules = [
    { keys: ['first', 'fname', 'given'], value: profile.firstName },
    { keys: ['last', 'lname', 'surname', 'family'], value: profile.lastName },
    { keys: ['email', 'e-mail'], value: profile.email },
    { keys: ['phone', 'mobile', 'tel'], value: profile.phone }
  ];

  inputs.forEach(input => {
    // To identify an input's purpose, we check its attributes.
    const id = input.id.toLowerCase();
    const name = input.name.toLowerCase();
    const placeholder = (input.placeholder || '').toLowerCase();
    
    // Combine all potential identifiers into one string to check.
    const identifier = `${id} ${name} ${placeholder}`;

    // We also try to find an associated <label> for the input.
    let labelText = '';
    // This is a more robust way to find the label
    let associatedLabel = input.closest('label') || document.querySelector(`label[for="${input.id}"]`);
    if (associatedLabel) {
        labelText = associatedLabel.textContent.toLowerCase();
    }
    
    const combinedText = `${identifier} ${labelText}`;

    // Apply our rules.
    for (const rule of rules) {
      for (const key of rule.keys) {
        if (combinedText.includes(key)) {
          input.value = rule.value;
          // Add a visual indicator that we filled this field.
          input.style.backgroundColor = '#e0ffde'; 
          break; // Move to the next input once we've found a match.
        }
      }
    }
  });
};

// Listen for messages from the popup script.
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "fillForm") {
    // When we get the message, retrieve the user's profile from storage.
    chrome.storage.sync.get('userProfile', (data) => {
      if (data.userProfile) {
        // Call our main function to do the filling.
        fillFormWithProfile(data.userProfile);
      } else {
        alert("No profile saved. Please save your profile in the extension popup first.");
      }
    });
    // It's good practice to return true for asynchronous responses.
    return true; 
  }
});