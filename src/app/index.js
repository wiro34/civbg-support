'use strict';

import MainController from './main/main.controller';
import NavbarController from '../app/components/navbar/navbar.controller';
import TechTreeController from '../app/components/techTree/techTree.controller';
import NewGameController from '../app/components/dialogs/newGame.controller';

import Players from './services/players';
import Tech from './services/tech';
import Firebase from './services/firebase.js';

angular.module('civbgSupport', [
  'ngAnimate',
  'ngCookies',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ui.router',
  'ui.bootstrap',
  'firebase'
])
  .constant('Tech', Tech)
  .service('Players', Players)
  .service('FireBase', Firebase.instance)
  .controller('MainController', MainController)
  .controller('NavbarController', NavbarController)
  .controller('TechTreeController', TechTreeController)
  .controller('NewGameController', NewGameController)

  .config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html'
      });

    $urlRouterProvider.otherwise('/');
  })
;
