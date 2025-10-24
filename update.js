// === Configuration ===
const APP_VERSION = "1.1"; // yahan apni current version likho
const UPDATE_URL = "version.json"; // JSON file ka naam

// === Check for updates ===
async function checkForUpdates() {
  try {
    const response = await fetch(UPDATE_URL + "?t=" + new Date().getTime()); 
    const data = await response.json();

    if (data.version !== APP_VERSION) {
      showUpdatePopup(data);
    }
  } catch (error) {
    console.log("Update check failed:", error);
  }
}

// === Show update popup ===
function showUpdatePopup(data) {
  const popup = document.createElement("div");
  popup.innerHTML = `
    <div style="
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 9999;
    ">
      <div style="
        background: white;
        padding: 25px;
        border-radius: 15px;
        max-width: 350px;
        text-align: center;
        font-family: sans-serif;
      ">
        <h2>🆕 Update Available!</h2>
        <p>${data.message}</p>
        <button id="updateBtn" style="
          margin-top: 10px;
          padding: 10px 20px;
          border: none;
          background: #007BFF;
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 16px;
          transition: 0.3s;
        ">Update Now</button>
      </div>
    </div>
  `;
  document.body.appendChild(popup);

  document.getElementById("updateBtn").addEventListener("click", () => {
    window.location.href = data.updateLink; // user ko update link par bhejna
  });
}

// === Run update check ===
window.addEventListener("load", checkForUpdates);