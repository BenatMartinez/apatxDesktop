const { app, BrowserWindow } = require("electron");



function createWindow() {
  let mainWindow = new BrowserWindow({
    width:1200,
    height:850,
    autoHideMenuBar: true,
    webPreferences: {
        nodeIntegration: true,
        contextIsolation: false,
        enableRemoteModule: true,
        height: 60
    },

  });
  //mainWindow.maximize();
  mainWindow.loadFile('index.html'),
  mainWindow.webContents.openDevTools()

  mainWindow.on("closed", function () {
    mainWindow = null;
  });

}

app.on("ready", createWindow);

app.on("resize", function (e, x, y) {
  mainWindow.setSize(x, y);
});

app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
  
});