/* jshint laxcomma: true */
require("colors");
var gulp      = require("gulp");
var gChmod    = require("gulp-chmod");
var gWeb      = require("gulp-webserver");

var webServerConfig = {
    livereload: true
  , port: process.env.PORT || 3000

  /* Various options for the webserver. Uncomment and change to suit */

  //, host: "localhost"
  //, path: "/"
  //, directoryListing: false
  //, fallback: "index.html"
  //, open: false
  //, https: false
  //, middleware: function () {} // be sure to read about this one
  //, proxies: []
};

gulp.task("default", ["vendorJs", "vendorCss", "serve"], function () {});

/*
 * This task kicks off the webserver. Change the options above to
 * alter its behavior.
 */
gulp.task("serve", function () {
  gulp.src("public")
    .pipe(gWeb(webServerConfig));
});

/*
 * Both vendor tasks just watch the ./vendor dir for new vendor js
 * and css, copying them over when added or updated.
 */
gulp.task("vendorJs", function () {
  gulp.src("vendor/js/**/*.js")
    .pipe(gChmod(664))
    .pipe(gulp.dest("public/js/vendor"));
});

gulp.task("vendorCss", function () {
  gulp.src("vendor/css/**/*.css")
    .pipe(gChmod(664))
    .pipe(gulp.dest("public/css/vendor"));
});
