module.exports = function (grunt) {
    grunt.initConfig({
       browserify: {
          js: {
             src: ["../js/main.js"],
             dest: "../dist/app.js"
          },
          options: {
             browserifyOptions: {
                paths: [
                   "./node_modules"
                ]
             }
          }
       },
       watch: {
          javascripts: {
             files: ["../js/**/*.js"],
             tasks: ["eslint", "browserify"]
          },
          browserify: {
             files: ["../js/*.js"],
             tasks: ["browserify"]
          }
          
        },
        eslint: {
            src: [
                "../js/**/*.js",
                "!node_modules/**/*.js"
            ]
       }
    });
 
    require("matchdep").filterDev("grunt-*").forEach(grunt.loadNpmTasks);
    grunt.registerTask("default", ["eslint", "browserify", "watch"]);
 };