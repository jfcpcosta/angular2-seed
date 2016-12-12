"use strict";

const gulp = require("gulp");
const del = require("del");
const tsc = require("gulp-typescript");
const sourcemaps = require('gulp-sourcemaps');
const tsProject = tsc.createProject("tsconfig.json");
const tslint = require('gulp-tslint');
const sass = require('gulp-sass');

/**
 * Remove build directory.
 */
gulp.task('clean', (cb) => {
  return del(["build"], cb);
});

/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
  return gulp.src("src/**/*.ts")
    .pipe(tslint({
      formatter: 'prose'
    }))
    .pipe(tslint.report());
});

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task("compile", ["tslint"], () => {
  let tsResult = gulp.src("src/**/*.ts")
    .pipe(sourcemaps.init())
    .pipe(tsProject(tsProject));

  return tsResult.js
    .pipe(sourcemaps.write(".", { sourceRoot: '/src' }))
    .pipe(gulp.dest("build"));
});

/**
 * Compile SASS files
 */
gulp.task("sass", () => {
  return gulp.src("src/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("build"));
});

/**
 * Copy all resources that are not TypeScript files into build directory.
 */
gulp.task("resources", () => {
  return gulp.src(["src/**/*", "!**/*.ts", "!**/*.scss"])
    .pipe(gulp.dest("build"));
});

/**
 * Copy all required libraries into build directory.
 */
gulp.task("libs", () => {
  let libs = [
    'core-js/client/shim.min.js',
    'systemjs/dist/system-polyfills.js',
    'systemjs/dist/system.src.js',
    'reflect-metadata/Reflect.js',
    'rxjs/**/*.js',
    'zone.js/dist/**',
    '@angular/**/bundles/**',
    'jquery/dist/jquery.min.js',
    'bootstrap/dist/css/bootstrap.min.css',
    'bootstrap/dist/js/bootstrap.min.js'
  ];

  return gulp
    .src(libs , { cwd: "node_modules/**" })
    .pipe(gulp.dest("build/lib"));
});

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task("watch", ["build"], () => {
  gulp.watch(["src/**/*.ts"], ['compile']).on('change', function (e) {
    console.log('TS [' + e.path + ']');
  });
  gulp.watch(["src/**/*.html", "src/**/*.css"], ['resources']).on('change', function (e) {
    console.log('RESOURCE [' + e.path + ']');
  });
  gulp.watch(["src/**/*.scss"], ['sass']).on('change', function (e) {
    console.log('SASS [' + e.path + ']');
  });
});

/**
 * Build the project.
 */
gulp.task("build", ['compile', 'sass', 'resources', 'libs'], () => {
  console.log("[ Building Project ]");
});
