function startSession() {
    console.log("Starting session...");

  // Simulate delay like an API response
  setTimeout(() => {
    const sessionId = generateRandomID();
    alert("Session started! ID: " + sessionId);
    console.log("Session ID:", sessionId);
  }, 1000);
}

function generateRandomID() {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
  let id = "";
  for (let i = 0; i < 8; i++) {
    id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}

