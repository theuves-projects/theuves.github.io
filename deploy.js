const ghPages = require('gh-pages')

const time = (new Date()).toLocaleString()

const dir = 'dist'

const options = {
  branch: 'master',
  message: `Publicado em ${time}`
}

const cb = () => {
  console.log('OK!')
}

ghPages.publish(dir, options, cb)