angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope, $state, User, localStorageService, $ionicLoading, $ionicPopup) {
    $scope.user = {};

    var params = {
        'grant_type': 'password',
        'username': '0557613133',
        'password': '123456',
        'client_id': 'Android02',
        'client_secret': '21B5F798-BE55-42BC-8AA8-0025B903DC3B',
        'scope': 'app1'
    };

    //var params = "grant_type=password&username=0557613133&password=123456&client_id=Android02&client_secret=21B5F798-BE55-42BC-8AA8-0025B903DC3B&scope=app1"

    $scope.login = function(data) {
        localStorageService.remove("access_token");
        $ionicLoading.show({
            content: '',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        User.login(params).success(function(res) {
                //console.log(res);

                if (localStorageService.isSupported) {
                    localStorageService.set("access_token", res.access_token);
                    User.getUser().success(function(res) {
                            //console.log(res)
                            $ionicLoading.hide();
                            loggedInUser = { user: res }
                            localStorageService.set("loggedInUser", loggedInUser);
                            $state.go('main');
                        })
                        .error(function(err) {
                            console.log(err);
                        })
                        //
                }
            })
            .error(function(err) {
                //console.log(err);
                $ionicLoading.hide();
                var confirmPopup = $ionicPopup.confirm({
                    title: 'Error',
                    template: 'Invalid Username/Password!'
                });

                confirmPopup.then(function(res) {
                    if (res) {
                        //console.log('You are sure');
                    } else {
                        //console.log('You are not sure');
                    }
                });
            })
    }




})

.controller('BookAppointmentCtrl', function($scope, $state, $http) {

})

.controller('MainCtrl', ['$scope', 'localStorageService', function($scope, localStorageService) {
    $scope.user = localStorageService.get("loggedInUser").user;
    console.log(localStorageService.get("loggedInUser"));
}])


.controller('BookingCtrl', ['$scope', 'Appointment', '$ionicLoading', function($scope, Appointment, $ionicLoading) {
        $scope.appointments = [];
        $ionicLoading.show({
            content: '',
            animation: 'fade-in',
            showBackdrop: true,
            maxWidth: 200,
            showDelay: 0
        });
        Appointment.get().success(function(res) {
                console.log(res)
                var date = new Date(res[0].AppointmentDate);
                console.log(dayname(date.getDay()))
                for (var i = 0; i < res.length; i++) {
                    var date = new Date(res[i].AppointmentDate);
                    $scope.appointments.push({ startTime: res[i].StartTimeStr, location: res[i].BranchName, day: dayname(date.getDay()), date: date.getDate(), month: monthname(date.getMonth()) })
                }

                console.log($scope.appointments)
                $ionicLoading.hide()
            })
            .error(function(err) {
                console.log(err)
            })
    }])
    .controller('MapController', function($scope, $ionicLoading) {

        google.maps.event.addDomListener(window, 'load', function() {
            var myLatlng = new google.maps.LatLng(37.3000, -120.4833);

            var mapOptions = {
                center: myLatlng,
                zoom: 16,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById("map"), mapOptions);

            navigator.geolocation.getCurrentPosition(function(pos) {
                map.setCenter(new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
                var myLocation = new google.maps.Marker({
                    position: new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude),
                    map: map,
                    title: "My Location"
                });
            });

            $scope.map = map;
        });

    });


function dayname(day) {
    if (day == 0) {
        return 'Sunday';
    } else if (day == 1) {
        return 'Monday'
    } else if (day == 2) {
        return 'Tuesday'
    } else if (day == 3) {
        return 'Wednesday'
    } else if (day == 4) {
        return 'Thursday'
    } else if (day == 5) {
        return 'Friday'
    } else if (day == 6) {
        return 'Saturday'
    }
}

function monthname(month) {
    if (month == 0) {
        return 'January';
    } else if (month == 1) {
        return 'February';
    } else if (month == 2) {
        return 'March';
    } else if (month == 3) {
        return 'April';
    } else if (month == 4) {
        return 'May';
    } else if (month == 5) {
        return 'June';
    } else if (month == 6) {
        return 'July';
    } else if (month == 7) {
        return 'August';
    } else if (month == 8) {
        return 'September';
    } else if (month == 9) {
        return 'October';
    } else if (month == 10) {
        return 'November';
    } else if (month == 11) {
        return 'December';
    }
}
