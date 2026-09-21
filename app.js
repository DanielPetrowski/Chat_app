const url = 'http://127.0.0.1:8000/chats/';

// GET: Holt die Daten vom Backend
async function loadMessages() {
    const response = await fetch(url);
    const data = await response.json();
    const chatbox = document.getElementById('chatbox');
    chatbox.innerHTML = ''; 
    
    data.forEach(msg => {
        chatbox.innerHTML += `<div>${msg.name}: ${msg.message}</div>`;
    });
}

// POST: Sendet die Daten ans Backend
async function sendMessage() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: name, message: message })
    });

    document.getElementById('message').value = ''; 
    loadMessages(); 
}

// Alle 3 Sekunden aktualisieren
setInterval(loadMessages, 3000);
loadMessages();
