const { app, BrowserWindow } = require('electron')

// Addon demo
const addon = require('../build/Release/hello');
console.log(addon.hello());

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('./html/index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })