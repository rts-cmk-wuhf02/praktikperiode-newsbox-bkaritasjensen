
const gulp = require("gulp");//Så henter den Gulp og selv finder den i Node mappen.
const ejs = require("gulp-ejs");
const postcss = require("gulp-postcss");
const postcssimport = require("postcss-import")
const tailwindcss = require("tailwindcss");
const autoprefixer = require("autoprefixer");
const rename = require("gulp-rename");//rename omdøber filen til noget andet.
const connect = require("gulp-connect");
const babel = require('gulp-babel');



function html(done){
	gulp.src("./src/html/templates/*.ejs") //Gulp skal hente en "ting" et sted fra. * - betyder der kan stå hvad som helst.
		.pipe(ejs())//Pipe transportere noget fra et sted....
		.pipe(rename(function(path){
			if (path.basename != "index"){//Hvis fil navnet ikke er lig med index,
				path.dirname = path.basename; //Ligger den ind i mappe som hedder basename,
				path.basename = "index";//Selve filen skal hedde "index",
			}
			path.extname = ".html";//Fortæller at filen skal hedde .html
		}))
		.pipe(gulp.dest("./dist"))//... Til et andet sted. Til mappen dist.
		.pipe(connect.reload());
	done();
}

function css(done){
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

function javaScript(done){
	gulp.src("./src/js/**/*.js")
		.pipe(babel({//Laver et rør hvor den skal køre igennem
			presets: ['@babel/env']
		}))
		.pipe(gulp.dest("./dist/assets/js"))//og hvor røret skal slutte.
		.pipe(connect.reload());//Reloader javaScript
	done();
}
function json(done){
	gulp.src("./src/json/*.json")
		.pipe(gulp.dest("./dist/data"))//dest = destanation.
		.pipe(connect.reload());
	done();
}


// Watchers
function watchhtml(){//Holder øje med html filerne, hvis der laves ændringer.
	gulp.watch("./src/html/**/*.ejs", { ignoreInitial: false}, html); //** - alle mapper i html * - alle filer med .ejs
}
function watchCss(){
	gulp.watch("./src/css/**/*.css", { ignoreInitial: false }, css);
}
function watchJavaScript(){
	gulp.watch("./src/js/**/*.js", { ignoreInitial: false }, javaScript);//False gør at det, den gør det lige så snart den starter og ikke kun når den kører.
}
function watchjson(){
	gulp.watch("./src/json/**/*.json", { ignoreInitial: false}, json);
}



gulp.task("dev", function(done){//Gulp packgets gør - function .....
	watchhtml();//Kører functionen 
	watchCss();
	watchJavaScript();
	watchjson();
	connect.server({ //Bruger connect packget
		livereload: true,//Reload browseren, ved ændringer
		root: "dist"//Hvor skal serveren eksistere
	})
	done();
}); 

gulp.task("build", function(done) {
	html(done);
	css(done);
	javaScript(done);
	json(done);
	images(done);
	done();
});

















