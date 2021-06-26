const { totalmem, freemem, uptime } = require('os')
const { formatBytes, formatSeconds } = require('../utils/formatters')

window.addEventListener('DOMContentLoaded', () => {
  // memory
  const totalMemDisp = document.getElementById('memory-totalmem')
  const freeMemoryDisp = document.getElementById('memory-freemem')
  const uptimeDisp = document.getElementById('memory-uptime')

  setInterval(() => {
    // totalmem
    totalMemDisp.innerHTML = ''
    totalMemDisp.innerHTML = formatBytes(totalmem())

    // freemem
    freeMemoryDisp.innerHTML = ''
    freeMemoryDisp.innerHTML = formatBytes(freemem())

    // uptime
    uptimeDisp.innerHTML = ''
    uptimeDisp.innerHTML = formatSeconds(uptime)

    // uptime
  }, 1000)

})

