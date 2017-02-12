module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'src/main/webapp/resources/css/scss',
          src: ['*.scss'],
          dest: 'src/main/webapp/resources/css/css',
          ext: '.css'
        }]
      }
    },
    watch:{
        server:{
            files:[
                "src/main/webapp/**/*.js",
                "src/main/webapp/**/*.css",
                "src/main/webapp/**/*.jsp"
            ],
            task: ['copyto'],
            options: {livereload: true}
        }
    },
    copyto:{
        stuff:{
            files:[{
                cwd: 'src/main/webapp/',
                src: ["**/*.js", "*/*.css", "**.*.jsp"],
                dest: "<%=prop.tomcat_home%>\\webapps\\<%=prop.app_name%>"
            }]
        }
    },

  });
  grunt.loadNpmTasks('grunt-copy-to');

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch','sass']);
}