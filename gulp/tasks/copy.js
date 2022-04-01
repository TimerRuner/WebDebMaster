export const copy = () => {
    return app.gulp
        .src(app.path.src.files.en)
        .pipe(app.gulp.dest(app.path.build.files.en))
        .pipe(app.gulp.src(app.path.src.files.ru))
        .pipe(app.gulp.dest(app.path.build.files.ru))
}
