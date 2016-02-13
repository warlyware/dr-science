'strict mode';

angular.module('DrScience', []);

angular.module('DrScience')
    .controller('MainController', ['$scope', function($scope) {

    var vm = this;

    var fpLink1 = angular.element(document.getElementById('fp-link-1'));
    fpLink1.on('mouseenter', function() {
        fpLink1.addClass('hover-color-1');
    });
    fpLink1.on('mouseleave', function() {
        fpLink1.removeClass('hover-color-1');
    });

    var fpLink2 = angular.element(document.getElementById('fp-link-2'));
    fpLink2.on('mouseenter', function() {
        fpLink2.addClass('hover-color-2');
    });
    fpLink2.on('mouseleave', function() {
        fpLink2.removeClass('hover-color-2');
    });




    console.log('DR.SCIENCE ONLINE');
}]);
