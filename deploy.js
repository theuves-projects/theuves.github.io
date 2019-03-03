const ghPages = require('gh-pages')

/**
 * Configurações da públicação
 * ===========================
 */

//
// Diretório com os arquivos a ser publicados.
//
const dir = 'dist'

//
// Opções acerca do Git/GitHub
//
const options = {
  branch: 'master',
  message: `Publicado em ${(new Date()).toLocaleString()}`
}

//
// Função que será chamada no final de tudo.
//
const cb = () => {
  console.log('Publicado!')
}

/**
 * Publica!
 * ========
 */

ghPages.publish(dir, options, cb)