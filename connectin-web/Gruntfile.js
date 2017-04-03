module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    
    watch: {
           files:['**/*.scss'],
           tasks:['compass']
        },
      compass: {
          dist: {
              options: {
                  sassDir: 'src/main/webapp/resources/styles/**/scss',
                  cssDir: 'src/main/webapp/resources/styles/**/css',
                  environment: 'development',
                  
              }
          }
      }
   

  });

  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('default',['watch','compass']);
}