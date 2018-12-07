var gulp = require('gulp');
var uglify = require('gulp-uglify');
var concat=require('gulp-concat')
var connect=require('gulp-connect')
var rev=require('gulp-rev')
var htmlmin=require('gulp-htmlmin')
var del=require('del')
var babel=require('gulp-babel')

var revCollector=require('gulp-rev-collector')
//创建一个任务
gulp.task('default', function() {s
  // 将你的默认的任务代码放在这
  console.log(1 + 2);
});

gulp.task('minihtml',function(){
    gulp.src('app/static/index.html')
    .pipe(htmlmin())
    .pipe(gulp.dest('./dist'))
})
gulp.task('mini',['minihtml','default'],function(){
    console.log('压缩成功')
})
gulp.task('minijs',function(){
    gulp.src('app/static/js/login.js')
    .pipe(babel({
        presets:['es2015']
    }))
    // .pipe(uglify())
    // .pipe(rev())
    .pipe(gulp.dest('./dist'))
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
    del('dist/*.js')
})
