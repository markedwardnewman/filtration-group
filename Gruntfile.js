module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
    
    //SASS to CSS compiler
		sass: {
			dist: {
				files: {
					'dist/assets/css/main.css' : 'src/assets/css/main.scss',
          'dist/assets/vendor/slick/css/slick.css' : 'src/assets/vendor/slick/css/slick.scss',
          'dist/assets/vendor/slick/css/slick-theme.css' : 'src/assets/vendor/slick/css/slick-theme.scss'
				}
			}
		},
    
    //A generalized task with specialized components
    postcss: {
      options: {
        processors: [
        
          //Standardizes the order of css rules
          require('postcss-sorting')({
            /* options */ 
          }),
          
          //Assigns browser specific pre-fixes
          require('autoprefixer')(), 
          
          //Minify css       
          require('cssnano')()
        ]
      },
      dist: {
        src: 'dist/assets/css/main.css'
      }
    },
    
    //Removes unused CSS
    uncss: { 
      dist: {
        files: {
          'dist/assets/css/main.css':'dist/index.html',
          'dist/assets/vendor/slick/css/slick.css' : 'dist/index.html',
          'dist/assets/vendor/slick/css/slick-theme.css' : 'dist/index.html'
        }
      }
    },
    
    //Performs specified tasks based upon file changes
		watch: {
      css: {
        files: 'src/assets/css/main.scss',
        tasks: ['sass','postcss']
      }/* ,
      html: {
        files: 'dist/index.html',
        tasks: ['validation']
      } */
		},
    
    //Reports w3c validation errors
    validation: { 
      options: {
          reset: grunt.option('reset') || true,
          reportpath: 'log/html-w3c-error-log/validation-report.json',
          path: 'log/html-w3c-error-log/validation-status.json',
          stoponerror: false,
          generateReport: true,
          errorHTMLRootDir: 'log/html-w3c-error-log',
          useTimeStamp: true
      },
      files: {
          src: 'dist/index.html'
      }
    }
	});
  
	grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-uncss');;  
	grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-w3c-html-validation');
	grunt.registerTask('default',['watch']);
  grunt.registerTask('test',['validation']);
  grunt.registerTask('prod',['sass','postcss','uncss','validation']);
}
