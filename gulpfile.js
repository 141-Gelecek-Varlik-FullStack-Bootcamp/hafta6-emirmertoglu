const { src, dest } = require('gulp')
const uglify = require('gulp-uglify')

function jsMinify() {
    return src('./js/*')
        .pipe(uglify())
        .pipe(dest('dist'))
}

exports.jsMinify = jsMinify