/*  This will be the centralized data source for the angularJS application */

(function() {
    "use strict";
    var colorID = null;
    var color = null;
    var hexcode = null;
    
    var ColorFactory = function() {
        var colors = [
                        { colorID: '0', color: 'black', hexcode: '#000000' },
                        { colorID: '1', color: 'brown', hexcode: '#ffffff' },
                        { colorID: '2', color: 'red', hexcode: '#ffffff' },
                        { colorID: '3', color: 'orange', hexcode: '#ffffff' },
                        { colorID: '4', color: 'yellow', hexcode: '#ffffff' },
                        { colorID: '5', color: 'green', hexcode: '#ffffff' },
                        { colorID: '6', color: 'blue', hexcode: '#ffffff' },
                        { colorID: '7', color: 'violet', hexcode: '#ffffff' },
                        { colorID: '9', color: 'gold', hexcode: '#ffffff' },
                        { colorID: '0', color: 'white', hexcode: '#ffffff' }
                    ];
        var factory = {};
        
        factory.getColors = function() {
            return colors;
        };
        
        factory.getColor = function() {
            for (var i=0, len=colors.length; i<len; i++) {
                if (colors[i].id === parseInt(colorID)) {
                    return colors[i];
                }
                return null;
            }
        };
        
    return factory;
    };
    
    angular.module('ColorsApp')
        .factory('ColorFactory', ColorFactory);

}());