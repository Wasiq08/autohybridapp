// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('Autotek', ['ionic', 'CoreApi', 'starter.controllers', 'starter.directives', 'starter.services', '720kb.datepicker', 'LocalStorageModule', 'ionic-timepicker'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

            // Don't remove this line unless you know what you are doing. It stops the viewport
            // from snapping when text inputs are focused. Ionic handles this internally for
            // a much nicer keyboard experience.
            cordova.plugins.Keyboard.disableScroll(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider.state('home', {
        templateUrl: "templates/home.html",
        url: "/home",
        controller: 'LoginCtrl'
    })

    .state('main', {
        templateUrl: "templates/main.html",
        url: "/main",
        controller: 'MainCtrl'
    })

    .state('agentmain', {
        templateUrl: "templates/agenthome.html",
        url: "/agentmain",
        controller: 'MainCtrl'
    })

    .state('about', {
        templateUrl: "templates/about.html",
        url: "/about"
    })

    .state('contact', {
        templateUrl: "templates/contact.html",
        url: "/contact"
    })

    .state('services', {
        templateUrl: "templates/services.html",
        url: "/services"
    })

    .state('promotion', {
        templateUrl: "templates/promo_service.html",
        url: "/promotion"
    })

    .state('location', {
        templateUrl: "templates/location.html",
        url: "/location",
    })



    .state('history', {
        templateUrl: "templates/history.html",
        url: "/history",
        controller: 'HistoryCtrl'
    })



    .state('appointmentreview', {
        templateUrl: "templates/appointment_review.html",
        url: "/appointreview",
        controller: "AppointReviewCtrl"
    })

    .state('appointconfirmed', {
        templateUrl: "templates/appoint_confirmed.html",
        url: "/appointconfirmed",
        controller: 'AppointConfimedCtrl'
    })

    .state('promotions', {
        templateUrl: "templates/promotions.html",
        url: "/promotions",
        controller: "PromotionCtrl"
    })

    .state('register', {
        templateUrl: "templates/signup.html",
        url: "/register",
        controller: 'SignupCtrl'
    })

    // .state('notifications', {
    //     templateUrl: "templates/notifications.html",
    //     url: "/notifications",
    //     controller: "NotificationCtrl"
    // })

    .state('app', {
        url: "/app",
        abstract: true,
        templateUrl: "templates/sidemenu.html",
    })

    .state('app.notifications', {
        url: "/notifications",
        views: {
            'menuContent': {
                templateUrl: "templates/notifications.html",
                controller: 'NotificationCtrl'
            }
        }
    })

    .state('app.booking', {
        url: "/booking",
        views: {
            'menuContent': {
                templateUrl: "templates/booking.html",
                controller: 'BookingCtrl'
            }
        }
    })

    .state('app.appointment', {
        url: "/appointment",
        views: {
            'menuContent': {
                templateUrl: "templates/appointment.html",
                controller: 'AppointmentCtrl'
            }
        }
    })

    .state('app.bookappointment', {
        url: "/bookappointment/:branchid",
        views: {
            'menuContent': {
                templateUrl: "templates/bookappointment.html",
                controller: 'BookAppointmentCtrl'
            }
        }
    })

    .state('app.salestat', {
        url: "/salestats",
        views: {
            'menuContent': {
                templateUrl: "templates/salestat.html",
                controller: 'SaleStatCtrl'
            }
        }
    })

    .state('app.earninghistory', {
        url: "/earninghistory",
        views: {
            'menuContent': {
                templateUrl: "templates/earninghistory.html",
                controller: 'SaleStatCtrl'
            }
        }
    })
    $urlRouterProvider.otherwise('/home');
});
