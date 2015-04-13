(function(){
'use strict';

angular.module("userApp")
  .directive('contextMenu', function ($parse) {
    var renderContextMenu = function ($scope, event, options) {
        angular.element(event.currentTarget).addClass('context');
        var $contextMenu =  angular.element('<div>');
        $contextMenu.addClass('dropdown clearfix');
        var $ul =  angular.element('<ul>');
        $ul.addClass('dropdown-menu');
        $ul.attr({ 'role': 'menu', 'id': 'contextMenu' });
        $ul.css({
            display: 'block',
            position: 'absolute',
            left: event.pageX + 'px',
            top: event.pageY + 'px'
        });
        angular.forEach(options, function (item, i) {
            var $li =  angular.element('<li>');
            if (item === null) {
                $li.addClass('divider');
            } else {
                var $a =  angular.element('<a>');
                $a.attr({ tabindex: '-1', href: '#' });
                $a.text(typeof item[0] === 'string' ? item[0] : item[0].call($scope, $scope, event));
                $li.append($a);
                $li.on('click', function ($event) {
                    $event.preventDefault();
                    $scope.$apply(function () {
                         angular.element(event.currentTarget).removeClass('context');
                        $contextMenu.remove();
                        item[1].call($scope, $scope, event);
                    });
                });
            }
            $ul.append($li);
        });
        $contextMenu.append($ul);
        var height = Math.max(
            document.body.scrollHeight, document.documentElement.scrollHeight,
            document.body.offsetHeight, document.documentElement.offsetHeight,
            document.body.clientHeight, document.documentElement.clientHeight
        );
        $contextMenu.css({
            width: '100%',
            height: height + 'px',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 9999
        });
         angular.element(document).find('body').append($contextMenu);
        $contextMenu.on("mousedown", function (e) {
            if (angular.element(e.target).hasClass('dropdown')) {
                angular.element(event.currentTarget).removeClass('context');
                $contextMenu.remove();
            }
        }).on('contextmenu', function (event) {
            angular.element(event.currentTarget).removeClass('context');
            event.preventDefault();
            $contextMenu.remove();
        });
    };
    return function ($scope, element, attrs) {
        element.on('contextmenu', function (event) {
            $scope.$apply(function () {
                event.preventDefault();
                var options = $scope.$eval(attrs.contextMenu);
                if (options instanceof Array) {
                    renderContextMenu($scope, event, options);
                } else {
                    throw '"' + attrs.contextMenu + '" not an array';
                }
            });
        });
    };
});
})();
