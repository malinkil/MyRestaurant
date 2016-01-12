(function(){
    angular.module('myApp').controller('slidCntrl', SlideController);

    function SlideController($scope){
        $scope.slides=[
            {image:'images/inside.jpg',
                description:'Image 1'},
            {image:'images/biryani.jpg',
                description:'Image 2'},
            {image:'images/bread basket.jpg',
                description:'Image 3'},
            {image:'images/gravy.jpg',
                description:'Image 4'},
            {image:'images/buc.jpg',
                description:'Image 5'},
            {image:'images/gravy.jpg',
                description:'Image 6'},
            {image:'images/tandoori.jpg',
                description:'Image 7'}
        ];

        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
            
        };

        console.log('slide Controller');
    }



})();


