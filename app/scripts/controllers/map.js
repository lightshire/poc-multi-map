'use strict';

/*jshint camelcase:false*/

/**
 * @ngdoc function
 * @name mapPocApp.controller:MapCtrl
 * @description
 * # MapCtrl
 * Controller of the mapPocApp
 */
angular.module('mapPocApp')
    .controller('MapCtrl', function ($scope) {
        var infoWindow = new google.maps.InfoWindow();
        $scope.salcedo = [
            [14.56091, 121.01638],
            [14.56149, 121.01947],
            [14.56174, 121.02213],
            [14.56165, 121.02608],
            [14.56107, 121.02848],
            [14.55958, 121.03054],
            [14.55567, 121.03406],
            [14.55335, 121.03251],
            [14.55198, 121.03052],
            [14.55111, 121.02934],
            [14.55372, 121.02701],
            [14.55598, 121.02358]
        ];

        $scope.legazpi = [
            [14.55791, 121.00865],
            [14.5587, 121.01007],
            [14.55949, 121.01179],
            [14.5602, 121.01316],
            [14.56078, 121.0144],
            [14.56095, 121.01526],
            [14.55961, 121.01614],
            [14.55895, 121.01732],
            [14.55808, 121.01857],
            [14.55725, 121.01998],
            [14.55596, 121.02196],
            [14.55492, 121.02367],
            [14.55384, 121.02518],
            [14.55243, 121.02689],
            [14.55106, 121.02831],
            [14.55044, 121.02887],
            [14.5484, 121.02655],
            [14.54712, 121.02488],
            [14.54504, 121.02252],
            [14.54255, 121.01964],
            [14.54138, 121.01784],
            [14.5413, 121.01694],
            [14.54489, 121.01481],
            [14.55057, 121.01178],
            [14.55517, 121.00923],
            [14.55683, 121.00831]
        ];


        $scope.manila_details = {
            population: 529039,
            area: 21.57,
            barangays: 33,
            malls: 6,
            office: 247,
            residentials: 125080,
            hospitals: 3,
            churches: 24,
            label: 'default'
        };

        $scope.legazpi_details = {
            barangays: 2,
            malls: 1,
            office: 36,
            residentials: 46075,
            hospitals: 1,
            churches: 9,
            label: 'info'
        };

        $scope.salcedo_details = {
            barangays: 3,
            malls: 2,
            office: 94,
            residentials: 38045,
            hospitals: 2,
            churches: 6,
            label: 'danger'
        };

        $scope.current_details = {};

        $scope.get_details = function (data) {
            $scope.current_details = $.extend($scope.current_details, $scope[data]);
        };

        $scope.get_legazpi_details = function () {
            $scope.get_details('legazpi_details');
        };

        $scope.get_salcedo_details = function () {
            $scope.get_details('salcedo_details');
        };

        $scope.get_details('manila_details');

    });

