module.exports = [
  {
    label: 'My app name',
    submenu: [{
      label: 'Jrb Youssef',
      click: function () {
        console.log('MY APP CLICKED')
      }
    },
    {
      label: 'Quite',
      accelerator: 'CmdOrCtrl+Q',
      click: function () {
        console.log('MY APP Quite')
      }
    }
    ]
  },
  {
    role: 'viewMenu'
  }
]