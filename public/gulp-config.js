module.exports = function() {
    var clientApp = "./app/scripts/",
        test = "./test/",
        report = './report/',
        vendors = [
                "app/bower_components/angular/angular.js",
                "app/bower_components/angular-animate/angular-animate.js",
                "app/bower_components/angular-resource/angular-resource.js",
                "app/bower_components/angular-ui-router/release/angular-ui-router.js",
                "app/bower_components/angular-bootstrap/ui-bootstrap-tpls.js",
                "app/bower_components/angular-mocks/angular-mocks.js"
                ];

    var config = {
    };

    /**
     * karma settings
     */
    config.karma = getKarmaOptions();

    return config;

    ////////////////

    function getKarmaOptions() {
        var options = {
            files: [].concat(
                vendors,
                clientApp + '**/*.js',
                test + 'unit/**/*.js'
            ),
            exclude: [],
            coverage: {
                dir: report + 'coverage',
                reporters: [
                    // reporters not supporting the `file` property
                    {type: 'html', subdir: 'report-html', },
                    // {type: 'lcov', subdir: 'report-lcov'},
                    // reporters supporting the `file` property, use `subdir` to directly
                    // output them in the `dir` directory.
                    // omit `file` to output to the console.
                    // {type: 'cobertura', subdir: '.', file: 'cobertura.txt'},
                    // {type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt'},
                    // {type: 'teamcity', subdir: '.', file: 'teamcity.txt'},
                    //{type: 'text'}, //, subdir: '.', file: 'text.txt'},
                    // {type: 'text-summary'} //, subdir: '.', file: 'text-summary.txt'}
                ]
            },
            preprocessors: {
              './app/scripts/**/*.js': 'coverage'
            }
        };
       // options.preprocessors[clientApp + '**/!(*.spec)+(.js)'] = ['coverage'];
        return options;
    }
};
