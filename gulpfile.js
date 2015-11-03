"use strict";
/* jshint laxcomma: true */
require("colors");
var gulp          = require("gulp");
var gChmod        = require("gulp-chmod");
var gWeb          = require("gulp-connect");
var gPref         = require("gulp-autoprefixer");
//var gIf           = require("gulp-if");

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
};

const tasks = ["vendorJs", "vendorCss", "serve", "watch"]

if (config.autoprefix) {
    tasks.push("autoprefix")

    gulp.task("autoprefix", function () {
        gulp.src(paths.src)
            .pipe(gPref(autoprefixConfig))
            .pipe(paths.dest.root)
    })
}

gulp.task("default", tasks);

if (config.server.reload) {
    gulp.task("reload", function () {
        gulp.src(paths.dest.root)
            .pipe(gWeb.reload())
    })
}

gulp.task("watch",  function () {
    gulp.watch(paths.vendor.js, ["vendorJs"]);
    gulp.watch(paths.vendor.css, ["vendorCss"]);

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
