

const gulp = require("gulp");//Så henter den Gulp og selv finder den i Node mappen.
const ejs = require("gulp-ejs");
const postcss = require("gulp-postcss");
const postcssimport = require("postcss-import")
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");//rename omdøber filen til noget andet.
const connect = require("gulp-connect");
const babel = require('gulp-babel');
const imagemin = require('gulp-imagemin');


function html(done) {
    gulp.src("./src/html/templates/**/*.ejs")
        .pipe(ejs().on("error", err => { console.error(err); }))
        .pipe(rename(function(path) {
            if(path.basename !== "index") {
                path.dirname = path.basename;
                path.basename = "index";
            }

            path.extname = ".html";
        }))
        .pipe(gulp.dest("./dist/"))
        .pipe(connect.reload());

    done();
}

function images(done){
	gulp.src("./src/images/*")
		.pipe(imagemin())
		.pipe(gulp.dest("dist/assets/images"))
		.pipe(connect.reload());
	done();
}

function css(done) {
    gulp.src("./src/css/**/*.css")
        .pipe(postcss([
            tailwindcss,
            postcssimport,
            autoprefixer,
        ]))
        .pipe(gulp.dest("./dist/assets/css"))
        .pipe(connect.reload());

    done();
}

function js(done) {
    gulp.src("./src/js/**/*.js")
        .pipe(babel({
            presets: ['@babel/env']
        }).on("error", err => console.log(err)))
        .pipe(gulp.dest("./dist/assets/js"))
        .pipe(connect.reload());

    done();
}



// Watchers
function watchHtml() {
    gulp.watch("./src/html/**/*.ejs", { ignoreInitial: false }, html);
}

function watchImages() {
    gulp.watch("./src/images/**/*", { ignoreInitial: false }, images);
}

function watchCss() {
    gulp.watch("./src/css/**/*.css", { ignoreInitial: false }, css);
}

function watchJs() {
    gulp.watch("./src/js/**/*.js", { ignoreInitial: false }, js);
}



gulp.task("dev", function(done) {
    watchHtml();
    watchImages();
    watchCss();
    watchJs();
    
    connect.server({
        livereload: true,
        root: "dist"
    });

    done();
});

gulp.task("build", function(done) {
    html(done);
    images(done);
    css(done);
    js(done);
    
    done();
});



 






