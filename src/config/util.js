const MAX_QUOTA = 100000000

const formatFileSize = size => {
  var i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024))
  return (
    (size / Math.pow(1024, i)).toFixed(2) * 1 +
    ' ' +
    ['B', 'KB', 'MB', 'GB', 'TB'][i]
  )
}



export { formatFileSize, MAX_QUOTA }
