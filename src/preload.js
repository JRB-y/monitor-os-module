const { contextBridge } = require('electron')

const cpuPreloader = require('./preloaders/cpuPreloader')
const memPreloader = require('./preloaders/memoryPreloader')

contextBridge.exposeInMainWorld('metrics', {
  cpus: cpuPreloader()
})

window.addEventListener('DOMContentLoaded', () => {
  // preload memory
  memPreloader()
})
