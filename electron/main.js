const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // Load Next.js app
  win.loadURL("http://localhost:3000"); // for dev
  // For production:
  // win.loadFile(path.join(__dirname, "../nextjs-app/out/index.html"));
}

app.whenReady().then(createWindow);