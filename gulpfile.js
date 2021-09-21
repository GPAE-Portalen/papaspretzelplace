const gulp = require('gulp');
const clean = require('gulp-clean');
const markdownToJSON = require('gulp-markdown-to-json');
const marked = require('marked');
const jsoncombine = require('gulp-jsoncombine');
const beautify = require('gulp-jsbeautifier');

// Clean JSON data
gulp.task('cleanJson', async () => {
    gulp.src("./content/json/**/*.json", { read: false })
        .pipe(clean())
});

// Generate JSON data from markdown
marked.setOptions({
    pedantic: true,
    smartypants: true
});
gulp.task('generateJson', async () => {
    gulp.src('./content/markdown/**/*.md')
        .pipe(markdownToJSON(marked))
        .pipe(gulp.dest('./content/json'))
});

// Combine JSON data
gulp.task('combineJson', async () => {
    gulp.src("./content/json/pretzels/*.json")
        .pipe(jsoncombine("pretzels.json", function (data, meta) {
            return new Buffer(JSON.stringify(data));
        }))
        .pipe(beautify())
        .pipe(gulp.dest("./src/data"));

        gulp.src("./content/json/pretzeldogs/*.json")
        .pipe(jsoncombine("pretzeldogs.json", function (data, meta) {
            return new Buffer(JSON.stringify(data));
        }))
        .pipe(beautify())
        .pipe(gulp.dest("./src/data"));

        gulp.src("./content/json/icecream/*.json")
        .pipe(jsoncombine("icecream.json", function (data, meta) {
            return new Buffer(JSON.stringify(data));
        }))
        .pipe(beautify())
        .pipe(gulp.dest("./src/data"));

        gulp.src("./content/json/waterice/*.json")
        .pipe(jsoncombine("waterice.json", function (data, meta) {
            return new Buffer(JSON.stringify(data));
        }))
        .pipe(beautify())
        .pipe(gulp.dest("./src/data"));


        gulp.src("./content/json/dips/*.json")
        .pipe(jsoncombine("dips.json", function (data, meta) {
            return new Buffer(JSON.stringify(data));
        }))
        .pipe(beautify())
        .pipe(gulp.dest("./src/data"));
});

// Copy images from assets folder to public folder
gulp.task('copyImages', async () => {
    gulp.src('./assets/**/*')
        .pipe(gulp.dest('./public/assets'))
});