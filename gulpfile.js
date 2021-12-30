const { src, dest } = require('gulp')
const uglify = require('gulp-uglify')
const rename = require('gulp-rename')

function jsMinify() {
    return src('./js/*') // get the js file
        .pipe(uglify()) // minimize it
        .pipe(rename({ suffix: '.min' })) // add .min suffix
        .pipe(dest('dist')) // output the file to dist folder
}

exports.jsMinify = jsMinify // to run: gulp jsMinify