//引入gulp及其组件
var gulp = require('gulp'),
    compass = require('gulp-compass'), //compass编译
    cleancss = require('gulp-clean-css'); //css压缩
var uglify = require('gulp-uglify'), //js压缩
    concat = require('gulp-concat'), //js拼接
    jshint = require('gulp-jshint'); //js检查
var seajs = require('gulp-seajs-combine'); //seajs合并
var rename = require('gulp-rename'), //文件更名
    notify = require('gulp-notify'); //提示信息
var imagemin = require('gulp-imagemin'), //图片压缩
    pngcrush = require('imagemin-pngcrush'),
    rev = require('gulp-rev'); //- 对文件名加MD5后缀
var revCollector = require('gulp-rev-collector'); //- 路径替换
htmlmin = require('gulp-htmlmin');

//压缩html
gulp.task('html', function() {
    return gulp.src('src/*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('dist'))
        .pipe(notify({ message: 'html task ok' }));
});

//压缩图片，添加MD5戳
gulp.task('img', ['css'], function() {
    return gulp.src('src/img/*')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngcrush()]
        }))
        .pipe(rev())
        .pipe(gulp.dest('dist/img/'))
        .pipe(rev.manifest())
        .pipe(gulp.dest('rev/img'))
        .pipe(notify({ message: 'img task ok' }));
});

//编译、压缩css
gulp.task('css', ['html'], function() {
    gulp.src('src/sass/*.scss')
        .pipe(compass({ //编译css
            config_file: 'config.rb', //compass配置文件
            css: 'dist/stylesheets', //css目录
            sass: 'src/sass' //sass目录
        }))
        .pipe(cleancss({ compatibility: 'ie8' })) //压缩css
        .pipe(rev())
        .pipe(gulp.dest('dist/stylesheets'))
        .pipe(rev.manifest()) //- 生成一个rev-manifest.json
        .pipe(gulp.dest('rev/css'))
        .pipe(notify({ message: 'css task ok' }));
    gulp.src('dist/common/css/*.css')
        .pipe(cleancss({ compatibility: 'ie8' }))
        .pipe(gulp.dest('dist/common/css'));
});


//合并压缩js
gulp.task('seajs', ['img'], function() {
    return gulp.src('src/js/main.js')
        .pipe(seajs(null, {
            except: ['jquery', 'sea'] //排除合并对象
        }))
        .pipe(uglify({
            mangle: { except: ['require', 'exports', 'module', '$'] }, //排除混淆关键字             compress: true //类型：Boolean 默认：true 是否完全压缩
        }))
        .pipe(rev())
        .pipe(gulp.dest('dist/javascript'))
        .pipe(rev.manifest()) //- 生成一个rev-manifest.json
        .pipe(gulp.dest('rev/js'));
});

//通过hash来精确定位到html模板中需要更改的部分,然后将修改成功的文件生成到指定目录
gulp.task('revhtml', ['seajs'], function() {
    return gulp.src(['rev/**/*.json', 'dist/*.html'])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest('dist/'));
    return gulp.src(['rev/**/*.json', 'dist/javascript/*.js'])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest('dist/javascript/'));
    return gulp.src(['rev/**/*.json', 'dist/stylesheets/*.css'])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest('dist/stylesheets/'));
});
//通过hash来精确定位到html模板中需要更改的部分,然后将修改成功的文件生成到指定目录
gulp.task('revjs', ['revhtml'], function() {
    return gulp.src(['rev/**/*.json', 'dist/javascript/*.js'])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest('dist/javascript/'));
});
//通过hash来精确定位到html模板中需要更改的部分,然后将修改成功的文件生成到指定目录
gulp.task('revcss', ['revjs'], function() {
    return gulp.src(['rev/**/*.json', 'dist/stylesheets/*.css'])
        .pipe(revCollector({
            replaceReved: true
        }))
        .pipe(gulp.dest('dist/stylesheets/'));
});

//监视
gulp.task('watch', function() {
    gulp.watch('src/sass/*.scss', ['css']);
    gulp.watch('src/js/*.js', ['seajs']);
    gulp.watch('src/*.html', ['html']);
    gulp.watch('src/img/*', ['img']);
    gulp.watch('rev/*/*.json', ['revjs']);
    gulp.watch('rev/*/*.json', ['revcss']);
    gulp.watch('rev/*/*.json', ['revhtml']);
});


gulp.task('default', ['seajs'], function() {
    console.log("ok");
});
