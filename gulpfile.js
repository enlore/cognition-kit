"use strict";
/* jshint laxcomma: true */
require("colors");
var gulp                = require("gulp");
var gChmod              = require("gulp-chmod");
var gWeb                = require("gulp-connect");

const autoprefixer      = require("gulp-html-autoprefixer");
const gIf               = require("gulp-if");

const config = {
    permissionBits: 664,
    autoprefix: process.env.PREFIX === "true" ? true : false,
    server: {
        reload: process.env.RELOAD === "false" ? false : true,
        port: process.env.PORT || 3000
    }
}

const paths = {
    src: { // src files if working with transcompiled stuff
        root: "src/**/*",
        html: "src/**/*.html",
        app: "src/app/**/*",
        layout: "src/index.html"
    },

    vendor: { // vendors stuff/lib/dependencies
        js: ["vendor/js/**/*.js"],
        css: ["vendor/css/**/*.css"]
    },

    dest: { // output dirs
        root: "dist",
        vendor: {
            js: "dist/js/vendor",
            css: "dist/css/vendor"
        }
    }
}

const webServerConfig = {
    port: config.server.port,
    livereload: config.server.reload,
    root: paths.dest.root
}

const autoprefixConfig = {
    browsers: ["IE 8", "IE 11", "last 3 versions"],
    add: true,
    remove: true,
    cascade: true
}

const tasks = ["vendorJs", "vendorCss", "appFiles", "serve", "watch"]

gulp.task("default", tasks);

gulp.task("appFiles", function () {
    const autopref = autoprefixer(autoprefixConfig)

    gulp.src(paths.src.html)
        .pipe(gIf(config.autoprefix, autopref)) // conditionally do autoprefixing of inline css in html files
        .pipe(gulp.dest(paths.dest.root));
})

if (config.server.reload) {
    gulp.task("reload", function () {
        gulp.src(paths.dest.root)
            .pipe(gWeb.reload())
    })
}

gulp.task("watch",  function () {
    gulp.watch(paths.vendor.js,     ["vendorJs"]);
    gulp.watch(paths.vendor.css,    ["vendorCss"]);
    gulp.watch(paths.src.html,      ["appFiles"])

    if (config.server.reload) {
        gulp.watch(paths.dest.root, ["reload"])
    }


})

/*
 * This task kicks off the webserver. Change the options above to
 * alter its behavior.
 */
gulp.task("serve", function () {
    gWeb.server(webServerConfig);
});

/*
 * Both vendor tasks just watch the ./vendor dir for new vendor js
 * and css, copying them over when added or updated.
 */
gulp.task("vendorJs", function () {
    gulp.src(paths.vendor.js)
        .pipe(gChmod(config.permissionBits))
        .pipe(gulp.dest(paths.dest.vendor.js));
});

gulp.task("vendorCss", function () {
    gulp.src(paths.vendor.css)
        .pipe(gChmod(config.permissionBits))
        .pipe(gulp.dest(paths.dest.vendor.css));
});
