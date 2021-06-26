module.exports = {
  formatBytes: (size) => {
    const i = Math.floor( Math.log(size) / Math.log(1024) )
    return ( size / Math.pow(1024, i) ).toFixed(2) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i]
  },
  formatSeconds: (seconds) => {
    return new Date(seconds * 1000).toISOString().substr(11, 8)
  }
}
