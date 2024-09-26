function sendMessage() {
    const chatWindow = document.getElementById('chat-window');
    const nameInput = document.getElementById('name-input');
    const chatInput = document.getElementById('chat-input');
    const name = nameInput.value.trim();
    const message = chatInput.value.trim();

    if (name !== '' && message !== '') {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        const timestamp = new Date().toLocaleTimeString();
        messageElement.innerHTML = `<strong>${name}:</strong> ${message} <span class="timestamp">${timestamp}</span>`;
        chatWindow.appendChild(messageElement);
        chatInput.value = '';
        chatWindow.scrollTop = chatWindow.scrollHeight;
    }
}

function saveToFile() {
    const chatWindow = document.getElementById('chat-window');
    const messages = chatWindow.innerText;
    const blob = new Blob([messages], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'chat.txt';
    link.click();
}