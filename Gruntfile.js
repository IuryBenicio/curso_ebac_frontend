module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        less:{
            development:{
                files:{
                    './build/style/main.css':'./src/style/style.less'
                }
            }
        },
        uglify:{
            target:{
                files:{
                    'build/script/main.min.js':'src/script/script.js'
                }
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', ['less','uglify']);
}