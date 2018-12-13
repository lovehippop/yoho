var gulp = require('gulp');

var uglify = require('gulp-uglify');
var concat=require('gulp-concat')
var connect=require('gulp-connect')
var rev=require('gulp-rev')
var htmlmin=require('gulp-htmlmin')
var del=require('del')
var babel=require('gulp-babel')
var csso=require('gulp-csso')
var imagemin=require('gulp-imagemin')
var sass = require('gulp-sass');
 sass.compiler = require('node-sass');
 var gulpSequence = require('gulp-sequence')

var revCollector=require('gulp-rev-collector')
//创建一个任务
gulp.task('default', function() {s
  // 将你的默认的任务代码放在这
  console.log(1 + 2);
});

gulp.task('minihtml',function(){
    gulp.src('app/static/*.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./dist'))
})
gulp.task('minics',function(){
    gulp.src('app/static/css/*.css')
    .pipe(csso())
    .pipe(gulp.dest('./dist/css'))
})
gulp.task('mini',['minihtml','minijs','miniimg','minicss'],function(){
    console.log('压缩成功')
})
gulp.task('miniimg',function(){
    gulp.src('app/**/*.{jpg,png,gif,ico}')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist'))
})
gulp.task('minijs',function(){
    gulp.src('app/static/js/*.js')
   
    
    .pipe(babel({
        presets:['es2015']
    }))
    .pipe(uglify())
    // .pipe(uglify())
    // .pipe(rev())
    .pipe(gulp.dest('./dist/js'))
    // .pipe(rev.manifest())
    // .pipe(gulp.dest('rev/js'))
    
})
gulp.task('yaso',function(){
    gulp.src('app/static/js/a.js')
   
    .pipe(uglify())
    .pipe(gulp.dest('./dist'))
})
gulp.task('ccc',function(){
    gulp.src('app/**/*.js')
    .pipe(concat('all.js'))
    .pipe(gulp.dest('./dist'));
})
gulp.task('connect',function(){
    connect.server({
        root:'dist',
        port:'7777',
        livereload:true
    })
})
gulp.task('sass', function () {
    return gulp.src('app/static/css/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('dist/static/css'));
  });
gulp.task('rev',function(){
    gulp.src(['rev/*.json','app/static/index.html'])
    .pipe(revCollector({
        replaceReved:true,
        dirReplacements:{
            'js':'/dist/js'
        }
    }))
    .pipe(gulp.dest('dist'))
})
gulp.task('clean',()=>{
    del('dist','rev')
})
gulp.task('watch',function(){
    gulp.watch('app/**/*.*',['all', 'sass'])
})
gulp.task('all',function(){
    gulp.src(['app/**/*.*','!app/static/css/*.scss'] )
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
})
gulp.task('dev',gulpSequence('all', 'sass','watch','connect'))