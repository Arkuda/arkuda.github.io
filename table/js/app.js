

angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    localStorage.setItem("numberofstart", localStorage.getItem("numberofstart") + 1);



    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

    .state('app.set', {
      url: '/set',
      views: {
        'menuContent': {
          templateUrl: 'templates/set.html',
          controller: 'setCtrl'
        }
      }
    })
    .state('app.rate', {
      url: '/rate',
      views: {
        'menuContent': {
          templateUrl: 'templates/rate.html',
          controller: 'rateCtrl'
        }
      }
    })
    .state('app.about', {
      url: '/about',
      views: {
        'menuContent': {
          templateUrl: 'templates/about.html'
        }
      }
    })
    .state('app.adds', {
      url: '/add',
      views: {
        'menuContent': {
          templateUrl: 'templates/add.html'
        }
      }
    })
  .state('app.raspisanie', {
    url: '/raspisanie/:dayID',
    views: {
      'menuContent': {
        templateUrl: 'templates/raspisanie.html',
        controller: 'raspisCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  if(localStorage.getItem("firstrun") == true || localStorage.getItem("firstrun") == undefined ){
    $urlRouterProvider.otherwise('/app/set');
    localStorage.setItem("numberofstart","1");

  } else if(localStorage.getItem("numberofstart") == "111") {
    $urlRouterProvider.otherwise('/app/rate');
  }else{
    $urlRouterProvider.otherwise('/app/raspisanie/'+ getDayOfWeek());
  }
});












//$ionicMaterialConfigProvider.enableForAllPlatforms();









var isAnglDate = false;
var DayOfWeek ="";


function getDayOfWeek(){
  var d = new Date();
  var n = d.getDay();
  if(isAnglDate){
    if(!(n ==6) || !(n ==0) ) return selectDayOfWeek(n-1);
    else return selectDayOfWeek(0);
  }else {
    if(!(n ==5) || !(n == 6) )  return selectDayOfWeek(n-1);
    else  return selectDayOfWeek( DayINT = 0);
  }
}

function selectDayOfWeek(dayint){
  switch (dayint) {
    case 0: return "pn"; break;
    case 1: return "vt"; break;
    case 2: return "sr"; break;
    case 3: return "cht"; break;
    case 4: return "pyat"; break;
    case 5: return "sub"; break;
  }
}

/*
*  var myFirebaseRef = new Firebase("https://raspgut.firebaseio.com/");
 myFirebaseRef.push().set({
 author: "alanisawesome",
 title: localStorage.getItem("numberofstart")
 });*/
