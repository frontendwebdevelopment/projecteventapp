var app = angular.module("myapp", []);
app.controller("ListController", ['$scope', function($scope) {
    $scope.personalDetails = [
        {
            'name':'Wizard World Comic Con',
            'date':' Jan 8–10',
            'time':'9AM - 6PM',
            'address':'New Orleans',
            'city':'New Orleans, LA, USA',
            'pin':'70112'
        },
        {
            'name':'ALA Midwinter Meeting',
            'date':'Jan 8–12',
            'time':'9AM - 6PM',
            'address':'Boston',
            'city':'Boston, MA, USA',
            'pin':'02101'
        },
        {
            'name':'New Delhi World Book Fair',
            'date':'Jan 9-17',
            'time':'9AM - 6PM',
            'address':'New Delhi',
            'city':'New Delhi, Delhi, India',
            'pin':'110020'
        }];
    
        $scope.addNew = function(personalDetails){
            $scope.personalDetails.push({ 
            'name':personalDetails.name,
            'date':personalDetails.date,
            'time':personalDetails.time,
            'address':personalDetails.address,
            'city':personalDetails.city,
            'pin':personalDetails.pin
            });
            $scope.PD = {};
        };
    
    
}]);
