const fs = require('fs')
const gulp = require('gulp');
const gulpEjs = require('gulp-ejs');
const gulpHtmlmin = require('gulp-htmlmin')

/**
 * Obter uma lista com o URL das imagens do site.
 */
function getImages() {
  let list = []

  for (dir of fs.readdirSync('./src/images')) {
    for (filename of fs.readdirSync(`./src/images/${dir}`)) {
      list = list.concat(`./images/${dir}/${filename}`)
    }
  }

  return list
}

//
// HTML
// Construir todo o HTML (a partir do EJS).
// ============================================================================
//

gulp.task('build:html', () => {
  return gulp
    .src('./src/*.ejs')
    .pipe(gulpEjs({ images: getImages() }, null, { ext: '.html' }))
    .pipe(gulpHtmlmin({ removeComments: true, collapseWhitespace: true }))
    .pipe(gulp.dest('./dist/'))
})

//
// build:css
// Copiar os arquivos CSS para a pasta "dist/".
// ============================================================================
//

gulp.task('build:css', () => {
  return gulp
    .src('./src/**/*.css')
    .pipe(gulp.dest('./dist/'))
})

//
// build:images
// Copiar os arquivos de imagens para a pasta "dist/".
// ============================================================================
//

gulp.task('build:images', () => {
  return gulp
    .src('./src/**/*.{png,jpg,jpeg}')
    .pipe(gulp.dest('./dist/'))
})

//
// build
// Deixar tudo pronto.
// ============================================================================
//

gulp.task('build', gulp.series(
  'build:html',
  'build:css',
  'build:images'
))

//
// watch:html
// Aguardar alterações nos arquivos EJS e construí-los.
// ============================================================================
//

gulp.task('watch:html', () => {
  gulp.watch('./src/**/*.ejs', null, gulp.parallel('build:html'))
})

gulp.task('watch:css', () => {
  gulp.watch('./src/**/*.css', null, gulp.parallel('build:css'))
})

gulp.task('watch:images', () => {
  gulp.watch('./src/**/*.{png,jpg,jpeg}', null, gulp.parallel('build:images'))
})