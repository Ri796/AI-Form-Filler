# AI-Powered Form Filling Browser Extension 📝

An intelligent browser extension designed to automate repetitive online form filling. This project combines a secure JavaScript front-end with a planned AI-powered backend to create a smart agent that understands forms semantically, going beyond traditional browser autofill.

## ⚠️ Project Status: In Development

This is an active, ongoing project.
*   ✅ **Frontend:** The browser extension frontend is **complete and functional**.
*   👨‍💻 **Backend:** The Python/Flask backend and NLP model are currently **in development**.

## ✨ Features (Completed Frontend)

-   **Automatic Form Detection:** Scans any webpage to identify all input fields, text areas, and select menus.
-   **Secure Local Storage:** Uses the `chrome.storage.API` to securely store user profile data (e.g., name, email, address) locally on the user's browser.
-   **Manual Form Filling:** Users can click the extension icon to automatically fill all detected form fields with their stored profile data.
-   **Modular Codebase:** The JavaScript is organized into clear content scripts and popup scripts, making it maintainable and easy to extend.

## 🚀 How to Run (Frontend Demo)

You can easily test the completed frontend portion of this project.

### Prerequisites

-   A Chromium-based browser (Google Chrome, Microsoft Edge, Brave, etc.)

### Installation Steps

1.  **Clone the Repository:**
    ```bash
    git clone https://github.com/Ri796/AI-Form-Filler.git
    ```
2.  **Open Browser Extensions:**
    *   Navigate to `chrome://extensions` or `edge://extensions` in your browser.
3.  **Enable Developer Mode:**
    *   Toggle the "Developer mode" switch, usually found in the top-right corner.
4.  **Load the Extension:**
    *   Click the **"Load unpacked"** button.
    *   Select the `extension` folder (or whichever folder contains your `manifest.json`) from the cloned repository.
5.  **Test it!**
    *   The extension icon will appear in your browser's toolbar. You can now visit a webpage with a form and test the filling functionality.

## 🛠️ Planned Backend Architecture (In Development)

The next phase of this project is to build and connect the AI backend.

1.  **Flask API:** A Python/Flask server will expose a single endpoint (e.g., `/classify`).
2.  **NLP Model:** A text classification model trained with Scikit-learn will be used to analyze form field labels (e.g., "First Name," "fname," "user_name").
3.  **Intelligent Mapping:** The frontend will send the labels to the API. The API will return a structured JSON response mapping each field to a standard type (e.g., `{"fname": "first_name", "Email Address": "email"}`).
4.  **Smart Filling:** The extension will use this map to intelligently fill the form with the correct user data.

## 💻 Tech Stack

-   **Frontend:** JavaScript, HTML, CSS, Chrome Extension APIs (MV3)
-   **Backend (Planned):** Python, Flask, Scikit-learn, Pandas

---

*Project by Riddhima Patra.*
