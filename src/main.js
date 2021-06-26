require('ejs-electron')
const path = require('path')
const menuTemplate = require('./menu')
const { app, BrowserWindow, Menu } = require('electron')

const createWindow = () => {
  const window = new BrowserWindow({
    width: 1000,
    height: 500,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    },
    // resizable: false
  })

  window.loadURL(`file://${__dirname}/ui/index.ejs`)
}

app.whenReady().then(() => {
  createWindow()
  // attach the menu
  const menu = Menu.buildFromTemplate(menuTemplate)
  Menu.setApplicationMenu(menu)

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createMemoryWindow()
  })
})

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
