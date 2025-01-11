(function () {
    // ================================
    // 1. CONFIGURATION (customizable)
    // ================================
    const CHAT_SERVER_URL = 'https://your-python-server.com/chat'; // replace with your server endpoint
    
    // Chat widget styling (inline CSS).
    // You could also move these styles to an external CSS file if desired.
    const widgetStyles = `
      /* Chat Bubble */
      #chat-bubble {
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background-color: #007bff;
        color: #fff;
        font-size: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        z-index: 999999;
      }
      
      #chat-bubble:hover {
        background-color: #0056b3;
      }
  
      /* Chat Container */
      #chat-container {
        position: fixed;
        bottom: 80px; /* just above the bubble */
        right: 20px;
        width: 350px;
        height: 400px;
        background-color: #fff;
        border: 1px solid #ddd;
        border-radius: 8px;
        display: flex;
        flex-direction: column;
        box-shadow: 0 4px 8px rgba(0,0,0,0.2);
        transform: translateX(400px); /* hidden by default */
        transition: transform 0.3s ease-in-out;
        z-index: 999999;
      }
      
      /* Show the chat container by sliding in from the right */
      #chat-container.open {
        transform: translateX(0);
      }
  
      /* Chat Header */
      #chat-header {
        background-color: #007bff;
        color: #fff;
        padding: 12px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        font-size: 16px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
  
      #chat-header button {
        background: transparent;
        border: none;
        color: #fff;
        cursor: pointer;
        font-size: 20px;
      }
  
      /* Chat Body */
      #chat-body {
        flex: 1;
        overflow-y: auto;
        padding: 10px;
        font-family: sans-serif;
        font-size: 14px;
        background-color: #f8f8f8;
      }
  
      .chat-message {
        margin-bottom: 8px;
        line-height: 1.4;
        max-width: 80%;
        padding: 8px 12px;
        border-radius: 4px;
        clear: both;
      }
  
      .chat-message.user {
        background-color: #007bff;
        color: #fff;
        float: right;
      }
  
      .chat-message.server {
        background-color: #ddd;
        color: #333;
        float: left;
      }
  
      /* Chat Footer */
      #chat-footer {
        display: flex;
        border-top: 1px solid #ddd;
        padding: 8px;
        background-color: #fff;
      }
  
      #chat-input {
        flex: 1;
        padding: 8px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        margin-right: 8px;
      }
  
      #send-button {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 0 16px;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
      }
  
      #send-button:hover {
        background-color: #0056b3;
      }
    `;
  
    // ================================
    // 2. DYNAMIC STYLE INJECTION
    // ================================
    const styleTag = document.createElement('style');
    styleTag.innerHTML = widgetStyles;
    document.head.appendChild(styleTag);
  
    // ================================
    // 3. CREATE THE CHAT ELEMENTS
    // ================================
    // (a) Chat Bubble
    const chatBubble = document.createElement('div');
    chatBubble.id = 'chat-bubble';
    chatBubble.innerHTML = '&#128172;'; // speech bubble icon (emoji)
    document.body.appendChild(chatBubble);
  
    // (b) Chat Container
    const chatContainer = document.createElement('div');
    chatContainer.id = 'chat-container';
    chatContainer.innerHTML = `
      <div id="chat-header">
        Chat with Us
        <button id="close-chat">&times;</button>
      </div>
      <div id="chat-body"></div>
      <div id="chat-footer">
        <input type="text" id="chat-input" placeholder="Type your message here..." />
        <button id="send-button">Send</button>
      </div>
    `;
    document.body.appendChild(chatContainer);
  
    // ================================
    // 4. HANDLERS AND STATE
    // ================================
    const chatBody = chatContainer.querySelector('#chat-body');
    const chatInput = chatContainer.querySelector('#chat-input');
    const sendButton = chatContainer.querySelector('#send-button');
    const closeChatButton = chatContainer.querySelector('#close-chat');
  
    // Toggle chat open/close
    chatBubble.addEventListener('click', () => {
      chatContainer.classList.add('open');
    });
  
    closeChatButton.addEventListener('click', () => {
      chatContainer.classList.remove('open');
    });
  
    // Function to add a message to the chat
    function addMessage(text, sender = 'server') {
      const messageDiv = document.createElement('div');
      messageDiv.classList.add('chat-message', sender);
      messageDiv.textContent = text;
      chatBody.appendChild(messageDiv);
      chatBody.scrollTop = chatBody.scrollHeight; // auto-scroll to bottom
    }
  
    // ================================
    // 5. SEND MESSAGE TO SERVER
    // ================================
    async function sendMessageToServer(userMessage) {
      try {
        // Make a POST request to your Python server with the user message
        const response = await fetch(CHAT_SERVER_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ message: userMessage }),
        });
  
        if (!response.ok) {
          throw new Error('Server error');
        }
  
        const data = await response.json();
        // Assuming the server returns { reply: "server's response" }
        const serverReply = data.reply || 'No response from server.';
        addMessage(serverReply, 'server');
      } catch (error) {
        console.error(error);
        addMessage('Oops, something went wrong...', 'server');
      }
    }
  
    // Handle sending messages
    function handleSend() {
      const text = chatInput.value.trim();
      if (text) {
        addMessage(text, 'user');     // show user message
        chatInput.value = '';         // clear input
        sendMessageToServer(text);    // send to server
      }
    }
  
    sendButton.addEventListener('click', handleSend);
    chatInput.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        handleSend();
      }
    });
  
    // ================================
    // 6. INITIATE FIRST MESSAGE
    // ================================
    // Wait a little so the chat container can render, then open automatically (optional).
    setTimeout(() => {
      chatContainer.classList.add('open');
      addMessage('Hi this is Anas, how can I help you today?');
    }, 1000);
  })();
  