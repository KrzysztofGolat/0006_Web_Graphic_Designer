module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
//    uglify: {
//      options: {
//        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
//      },
//      build: {
//        src: 'src/<%= pkg.name %>.js',
//        dest: 'build/<%= pkg.name %>.min.js'
//      }
//    },
    sass: {
        dist: {
            options: {
                style: "compressed"  
            },
            files: {
                "dist/styles/main.css": ["app/styles/style.scss"]
            }
        }
    },
      
    includes: {
        files: {
            src: 'app/*.html',
            dest: 'dist/',
            flatten: true,
            cwd: '.',
            options: {
                silent: true,
            }
        }
    },
      
      watch: {
          stylesheets: {
              files: 'app/styles/*.scss',
              tasks: ['sass'],
              options: {
                  spawn:false,
                  event:['all']
		      },
	       },
          widoki: {
              files: 'app/*.html',
              tasks: ['includes']
	      }
      },
      
      copy: {
          obrazki: {
            cwd: 'app/img/',
            src: [ '**' ],
            dest: 'dist/img',
            expand: true
        } 
    }
    

  });

    // Load the plugin that provides the "uglify" task.
    //    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-includes');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');
    
    // Default task(s).
//    grunt.registerTask('default', ['uglify']);
    grunt.registerTask('przemielstyle', ['sass', 'includes', 'watch']);
    grunt.registerTask('przemiel', ['sass', 'includes', 'copy' ]);

};