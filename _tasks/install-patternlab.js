// Load plugins
var gulp = require('gulp'),
    exec = require('child_process').exec;

// Installs Patternlab.
gulp.task('install-pattern-lab', function(cb) {
    exec('npm --prefix ./node_modules/edition-node-gulp install ./node_modules/edition-node-gulp', function (err, stdout, stderr) {
        console.log(stdout);
        console.log(stderr);
        cb(err);
    });
});