module.exports = function(config){
 config.set({
   basePath : './',
   files : [
     'public/js/lib/angular.min.js',
     'public/js/lib/angular-mocks.js',
     'public/js/filters/*.js'
   ],
   autoWatch : true,
   browsers : ['Chrome'],
   frameworks: ['jasmine'],
   plugins : [
           'karma-chrome-launcher',
           'karma-jasmine'
           ]
});
};
