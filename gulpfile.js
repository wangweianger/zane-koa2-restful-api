const gulp = require('gulp')
const nodemon = require('gulp-nodemon')
const babel = require('gulp-babel');
const replace = require('gulp-replace');
const gulpSequence = require('gulp-sequence');  

/*----------dev------------*/
var jsScript = 'node'
if (process.env.npm_config_argv !== undefined && process.env.npm_config_argv.indexOf('debug') > 0) {
    jsScript = 'node debug'
}
gulp.task('nodemon', function () {
    return nodemon({
        script: 'build/server.js',
        execMap: {
            js: jsScript
        },
        verbose: true,
        ignore: ['build/*.js', 'dist/*.js', 'nodemon.json', '.git', 'node_modules/**/node_modules', 'gulpfile.js'],
        env: {
            NODE_ENV: 'development'
        },
        ext: 'js json'
    })
})

gulp.task('default', ['nodemon'], () => {
    console.log('gulpfile.js 已经运行!')
})



/*--------build--------*/
gulp.task('babel', () => {
    return gulp.src('./src/**')
        .pipe(babel({
            "presets": ["es2015", "stage-2"],
            "plugins": ["transform-runtime"]
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('replace', function(){
  gulp.src(['./dist/config.js'])
    .pipe(replace('http://127.0.0.1:8000/', 'http://zane.morning-star.cn/'))
    .pipe(replace('localhost', '10.13.119.241'))
    .pipe(replace(/USER(.+)?root'/, "USER:'fea'"))
    .pipe(replace(/PASSWORD(.+)?root'/, "PASSWORD:'QmxMySQLv2Venus'"))
    .pipe(gulp.dest('./dist'));
});


gulp.task('build', gulpSequence('babel','replace'));



