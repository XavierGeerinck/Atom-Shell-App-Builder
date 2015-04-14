var gulp = require('gulp');
var atomshell = require('gulp-atom-shell');

gulp.task('build', function () {
    return gulp.src('src/**')
        .pipe(atomshell({
              version: '0.23.0',
              platform: 'darwin',
              winIcon: './resources/icon.ico',
              darwinIcon: './resources/icon.icns'
         }))
        .pipe(atomshell.zfsdest('./build/app.zip'));
});
