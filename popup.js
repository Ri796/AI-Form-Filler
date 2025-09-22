// Function to save the user's profile data.
function saveProfile() {
  const profile = {
    firstName: document.getElementById('firstName').value,
    lastName: document.getElementById('lastName').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
  };

  chrome.storage.sync.set({ userProfile: profile }, () => {
    const status = document.getElementById('status');
    status.textContent = 'Profile saved!';
    setTimeout(() => {
      status.textContent = '';
    }, 2000);
  });
}

// Function to load the user's profile data when the popup opens.
function loadProfile() {
  chrome.storage.sync.get('userProfile', (data) => {
    if (data.userProfile) {
      document.getElementById('firstName').value = data.userProfile.firstName || '';
      document.getElementById('lastName').value = data.userProfile.lastName || '';
      document.getElementById('email').value = data.userProfile.email || '';
      document.getElementById('phone').value = data.userProfile.phone || '';
    }
  });
}

// Send a message to the content script to fill the form.
function fillForm() {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
  
    chrome.tabs.sendMessage(tabs[0].id, { action: "fillForm" });
  });
}

// Add event listeners.
document.getElementById('saveButton').addEventListener('click', saveProfile);
document.getElementById('fillButton').addEventListener('click', fillForm);

document.addEventListener('DOMContentLoaded', loadProfile);
