(function () {
    // ================================
    // 1. Dynamic Inline CSS
    // ================================
    const popupStyles = `
      #my-popup-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, 0.6);
        display: none; /* hidden by default */
        justify-content: center;
        align-items: center;
        z-index: 99999;
      }
      
      #my-popup-overlay.show {
        display: flex;
      }
  
      #my-popup-container {
        background: #fff;
        width: 400px;
        padding: 20px;
        border-radius: 6px;
        text-align: center;
        position: relative;
        font-family: sans-serif;
      }
      
      #my-popup-close {
        position: absolute;
        top: 10px;
        right: 15px;
        background: transparent;
        border: none;
        font-size: 22px;
        cursor: pointer;
      }
  
      #my-popup-message {
        margin: 20px 0;
        font-size: 16px;
        color: #333;
      }
  
      #my-popup-button {
        background: #007bff;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        font-size: 14px;
        cursor: pointer;
      }
  
      #my-popup-button:hover {
        background: #0056b3;
      }
    `;
  
    const styleTag = document.createElement('style');
    styleTag.innerHTML = popupStyles;
    document.head.appendChild(styleTag);
  
    // ================================
    // 2. Create the Popup Elements
    // ================================
    const overlay = document.createElement('div');
    overlay.id = 'my-popup-overlay';
  
    const container = document.createElement('div');
    container.id = 'my-popup-container';
  
    const closeBtn = document.createElement('button');
    closeBtn.id = 'my-popup-close';
    closeBtn.innerHTML = '&times;';
  
    const messageEl = document.createElement('div');
    messageEl.id = 'my-popup-message';
    messageEl.textContent = 'Hey there! This is a popup.';
  
    const actionBtn = document.createElement('button');
    actionBtn.id = 'my-popup-button';
    actionBtn.textContent = 'OK';
  
    // Build the structure
    container.appendChild(closeBtn);
    container.appendChild(messageEl);
    container.appendChild(actionBtn);
    overlay.appendChild(container);
    document.body.appendChild(overlay);
  
    // ================================
    // 3. Show/Hide Logic
    // ================================
    function showPopup() {
      overlay.classList.add('show');
    }
  
    function hidePopup() {
      overlay.classList.remove('show');
    }
  
    // Close button or background click -> hide
    closeBtn.addEventListener('click', hidePopup);
    actionBtn.addEventListener('click', hidePopup);
  
    // (Optional) If you want to close popup by clicking outside the container
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) {
        hidePopup();
      }
    });
  
    // ================================
    // 4. Auto-show the popup
    // ================================
    // For example, show the popup after 3 seconds
    setTimeout(() => {
      showPopup();
    }, 3000);
  
    // If you prefer to show it immediately, just call showPopup() without setTimeout.
    // Or you can expose a global method if you want manual control.
    
  })();
  