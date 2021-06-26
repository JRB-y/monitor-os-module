const { app, BrowserWindow, Menu } = require('electron')

const menuTemplate = require('./menu')
const path = require('path')

function createWindow () {
  // Create the browser window.
  const window = new BrowserWindow({
    width: 300,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, 'ui', 'memory', 'memoryPreload.js')
    },
    // resizable: false
  })

  window.loadFile(path.join(__dirname, 'ui', 'memory', 'memory.html'))

  // window.webContents.openDevTools()
}

app.whenReady().then(() => {
  createWindow()

  // attach the menu
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
